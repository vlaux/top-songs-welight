import { Component, OnInit } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { Song } from './song';
import { SongService } from './song.services';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {
    songs;
    meta;

    constructor(private songService: SongService) { };

    loadSongs(url? : string) {
        this.songService.getSongs(url).then(response => {
            this.songs = response.songs;
            this.meta = response.meta;
        })
    }

    ngOnInit() {
        this.loadSongs();
    };
    
}
