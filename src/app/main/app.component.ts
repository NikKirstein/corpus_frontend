import { Component } from '@angular/core';
import { TextSchema } from '../text/textSchema';
import { RestAPI } from '../restAPI.service';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: '../main/app.component.html',
  styleUrls: ['../main/app.component.css']
})
export class AppComponent {
  title = 'Crow';
  subtitle = 'Corpus & Repository of Writing'
  private LOGO = require("./assets/logo.png");
}
