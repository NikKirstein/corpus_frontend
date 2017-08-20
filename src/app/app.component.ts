import { Component } from '@angular/core';
import { TextSchema } from './textSchema';
import { RestAPI } from './restAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  title = 'Corpus';
}
