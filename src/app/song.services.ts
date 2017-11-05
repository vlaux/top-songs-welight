import { Injectable } from '@angular/core';
import { Song } from './song';

const SONGS = [
    {
        "artist":"Aerosmith",
        "id":209,
        "rank":1,
        "resource_uri":"/api/v1/song/209/",
        "song":"Sweet Emotion"
    },
    {
        "artist":"Led Zeppelin",
        "id":208,
        "rank":2,
        "resource_uri":"/api/v1/song/208/",
        "song":"Kashmir"
    },
    {
        "artist":"The Rolling Stones",
        "id":207,
        "rank":3,
        "resource_uri":"/api/v1/song/207/",
        "song":"Gimme Shelter"
    },
    {
        "artist":"AC/DC",
        "id":206,
        "rank":4,
        "resource_uri":"/api/v1/song/206/",
        "song":"Back in Black"
    },
    {
        "artist":"The Beatles",
        "id":205,
        "rank":5,
        "resource_uri":"/api/v1/song/205/",
        "song":"A Day in the Life"
    },
    {
        "artist":"The Jimi Hendrix Experience",
        "id":204,
        "rank":6,
        "resource_uri":"/api/v1/song/204/",
        "song":"All Along the Watchtower"
    },
    {
        "artist":"Queen",
        "id":203,
        "rank":7,
        "resource_uri":"/api/v1/song/203/",
        "song":"Bohemian Rhapsody"
    },
    {
        "artist":"Van Halen",
        "id":202,
        "rank":8,
        "resource_uri":"/api/v1/song/202/",
        "song":"Everybody Wants Some!!"
    },
    {
        "artist":"Pink Floyd",
        "id":201,
        "rank":9,
        "resource_uri":"/api/v1/song/201/",
        "song":"Comfortably Numb"
    },
    {
        "artist":"Black Sabbath",
        "id":200,
        "rank":10,
        "resource_uri":"/api/v1/song/200/",
        "song":"Paranoid"
    },
    {
        "artist":"The Who",
        "id":199,
        "rank":11,
        "resource_uri":"/api/v1/song/199/",
        "song":"Baba O’ Riley"
    },
    {
        "artist":"Guns N’ Roses",
        "id":198,
        "rank":12,
        "resource_uri":"/api/v1/song/198/",
        "song":"Sweet Child O’ Mine"
    },
    {
        "artist":"Journey",
        "id":197,
        "rank":13,
        "resource_uri":"/api/v1/song/197/",
        "song":"Don’t Stop Believin"
    },
    {
        "artist":"Lynyrd Skynyrd",
        "id":196,
        "rank":14,
        "resource_uri":"/api/v1/song/196/",
        "song":"Sweet Home Alabama"
    },
    {
        "artist":"Creedence Clearwater Revival",
        "id":195,
        "rank":15,
        "resource_uri":"/api/v1/song/195/",
        "song":"Fortunate Son"
    },
    {
        "artist":"Bruce Springsteen",
        "id":194,
        "rank":16,
        "resource_uri":"/api/v1/song/194/",
        "song":"Born to Run"
    },
    {
        "artist":"Ozzy Osbourne",
        "id":193,
        "rank":17,
        "resource_uri":"/api/v1/song/193/",
        "song":"Crazy Train"
    },
    {
        "artist":"The Doors",
        "id":192,
        "rank":18,
        "resource_uri":"/api/v1/song/192/",
        "song":"L.A Woman"
    },
    {
        "artist":"ZZ Top",
        "id":191,
        "rank":19,
        "resource_uri":"/api/v1/song/191/",
        "song":"La Grange"
    },
    {
        "artist":"The Eagles",
        "id":190,
        "rank":20,
        "resource_uri":"/api/v1/song/190/",
        "song":"Hotel California"
    }
]

@Injectable()
export class SongService {
    getSongs(): Promise<Song[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(SONGS), 1000);
        });
    };

    getSong(id: number): Promise<Song> {
        return this.getSongs().then(heroes => heroes.find(h => h.id === id));
    }
}