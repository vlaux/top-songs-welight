import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Song } from './song';

import 'rxjs/add/operator/toPromise';

const SERVICE_URL = 'http://146.148.103.175:8080/';

@Injectable()
export class SongService {
    private songsUrl = 'api/v1/song/';
    private headers = new Headers({'Content-Type': 'application/json'});
    

    constructor(private http: Http) { };
    
    getSongs(url?: string): Promise<{songs: Song[], meta: Object}> {
        return this.http.get(`${SERVICE_URL}${url ? url : this.songsUrl}`)
            .toPromise()
            .then(response => {return {'songs': response.json().objects as Song[], 'meta': response.json().meta as Object}})
            .catch(e => console.error(e));
    };

    getSong(id: number): Promise<Song> {
        return this.http.get(`${SERVICE_URL}${this.songsUrl}${id}/`)
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    };

    createSong(song: Song): Promise<Song> {
        return this.http.post(`${SERVICE_URL}${this.songsUrl}`,
                JSON.stringify(song),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    }

    saveSong(song: Song): Promise<Song> {
        return this.http.put(`${SERVICE_URL}${this.songsUrl}${song.id}/`, 
                JSON.stringify(song),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Song)
            .catch(e => console.error(e));
    };

    deleteSong(songId: number) : Promise<boolean> {
        return this.http.delete(`${SERVICE_URL}${this.songsUrl}${songId}/`)
            .toPromise()
            .then(response => true)
            .catch(e => console.error(e));
    }
}