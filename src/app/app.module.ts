import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SongService } from './song.services';
import { AppComponent } from './app.component';
import { SongComponent } from './song.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SongComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'song/:id',
        component: SongComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    SongService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
