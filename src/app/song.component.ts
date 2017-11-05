import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
        private location: Location
      ) {}

    ngOnInit() {
        this.route.paramMap.
            switchMap((params: ParamMap) => this.songService.getSong(+params.get('id')))
            .subscribe(song => this.song = song);
    };
}