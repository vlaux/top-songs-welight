import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { SongService } from './song.services';
import { AppComponent } from './app.component';
import { SongComponent } from './song.component';
import { ListComponent } from './list.component';
import { PaginatorComponent } from './paginator.component';
import { RoundPipe } from './round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SongComponent,
    PaginatorComponent,
    RoundPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'song',
        component: SongComponent,
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
