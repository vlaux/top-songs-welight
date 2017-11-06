import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Song } from './song';
import { SongService } from './song.services';

@Component({
    selector: 'song',
    templateUrl: './song.component.html',
})

export class SongComponent {
    song: Song;

    constructor(
        private songService: SongService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {}

    save() {
        let promise;
        if (this.song.id)
            promise = this.songService.saveSong(this.song);
        else 
            promise = this.songService.createSong(this.song);

        promise.then(song => {
            this.song = song;
            this.location.go(`/song/${song.id}`);
        });
    }

    delete() {
        this.songService.deleteSong(this.song.id)
            .then(r => {
                this.router.navigate(['/list']);
                return true;
            });
    }

    init(songId: number | null): Promise<Song> {
        if (songId)
            return this.songService.getSong(songId);
        else 
            return Promise.resolve(new Song);
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.init(+params.get('id')))
            .subscribe(song => this.song = song);
    };
}