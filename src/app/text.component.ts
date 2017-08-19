import { Component, Input } from '@angular/core';
import { Text } from './text';
import { RESTAPIText } from './rest-api-text.service';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  templateUrl: './text.component.html',
  styleUrls: ['./app.component.css']
})

export class TextComponent {
  ngOnInit(): void {
    this.get();
  }
  TextObject: Text[];

  constructor(
    private RESTAPIText: RESTAPIText,
    private route: ActivatedRoute,
  ) {}

  get(): void {
    var id = this.route.params['_value'].id;
    this.RESTAPIText.getText(id).then(response => {
      this.TextObject = response[0];
    });
  }

}
