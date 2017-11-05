import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.services';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
    songs;

    constructor(private songService: SongService) { };

    ngOnInit() {
        this.songService.getSongs().then(songs => this.songs = songs);
    };
    
}
