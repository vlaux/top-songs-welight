import { Component } from '@angular/core';
import { ListComponent } from './list.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>TOP 100 WELIGHT</div>
    <router-outlet></router-outlet>    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
