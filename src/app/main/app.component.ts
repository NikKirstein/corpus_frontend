import { Component } from '@angular/core';
import { TextSchema } from '../text/textSchema';
import { RestAPI } from '../restAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: '../main/app.component.html',
  styleUrls: ['../main/app.component.css']
})
export class AppComponent {
  title = 'Corpus front-end test';
}
