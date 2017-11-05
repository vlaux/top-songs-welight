import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Song } from './song';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongService {
    private songsUrl = 'http://146.148.103.175:8080/api/v1/song/';

    constructor(private http: Http) { };
    
    getSongs(): Promise<Song[]> {
        return this.http.get(this.songsUrl)
            .toPromise()
            .then(response => response.json().objects as Song[])
            .catch(e=>console.error(e));
    };

    getSong(id: number): Promise<Song> {
        return this.getSongs().then(songs => songs.find(s => s.id === id));
    }
}