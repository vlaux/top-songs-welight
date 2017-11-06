import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Metadata } from './metadata';

@Component({
    selector: 'paginator',
    templateUrl: './paginator.component.html'
})

export class PaginatorComponent {
    loadSongs(url): void {
        this.loadPage.emit([url]);
    }
    @Input() meta: Metadata;
    @Output() loadPage: EventEmitter<any> = new EventEmitter();
}