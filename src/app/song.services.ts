import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Song } from './song';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SongService {
    private songsUrl = 'http://146.148.103.175:8080/api/v1/song/';
    private headers = new Headers({'Content-Type': 'application/json'});
    

    constructor(private http: Http) { };
    
    getSongs(): Promise<Song[]> {
        return this.http.get(this.songsUrl)
            .toPromise()
            .then(response => response.json().objects as Song[])
            .catch(e => console.error(e));
    };

    getSong(id: number): Promise<Song> {
        return this.http.get(`${this.songsUrl}${id}/`)
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    };

    createSong(song: Song): Promise<Song> {
        return this.http.post(this.songsUrl,
                JSON.stringify(song),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    }

    saveSong(song: Song): Promise<Song> {
        return this.http.put(`${this.songsUrl}${song.id}/`, 
                JSON.stringify(song),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    };

    deleteSong(songId: number) : Promise<boolean> {
        return this.http.delete(`${this.songsUrl}${songId}/`)
            .toPromise()
            .then(response => true)
            .catch(e => console.error(e));
    }
}