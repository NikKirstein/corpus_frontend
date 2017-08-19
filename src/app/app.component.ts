import { Component } from '@angular/core';
import { Text } from './text';
import { RESTAPIText } from './rest-api-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corpus';
}
