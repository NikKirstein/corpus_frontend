import { Component, Input } from '@angular/core';
import { TextSchema } from '../text/textSchema';
import { RestAPI } from '../restAPI.service';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  templateUrl: '../text/text.component.html',
  styleUrls: ['../text/text.component.css']
})

export class TextComponent {
  ngOnInit(): void {
    this.get();
  }
  TextObject: TextSchema[];

  constructor(
    private RestAPI: RestAPI,
    private route: ActivatedRoute,
  ) {}

  get(): void {
    var id = this.route.params['_value'].id;
    this.RestAPI.getText(id).then(response => {
      this.TextObject = response[0];
    });
  }

}
