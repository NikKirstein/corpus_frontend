import { Component, Input } from '@angular/core';
import { TextSchema } from '../text/textSchema';
import { RestAPI } from '../restAPI.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  templateUrl: '../text/text.component.html',
  styleUrls: ['../text/text.component.css']
})

export class TextComponent {
  ngOnInit(): void {
    this.get();
  }
  TextObject: TextSchema[];
  Frequency: {};
  Wordcount: '';

  constructor(
    private RestAPI: RestAPI,
    private route: ActivatedRoute,
  ) {}

  get(): void {
    var id = this.route.params['_value'].id;
    this.RestAPI.getText(id).then(response => {
      this.TextObject = response[0];
      var words = response[0].field_text;

      // The following is a *temporary* way to do simple word frequency.
      var s = words.replace(/(^\s*)|(\s*$)/gi,"");
      s = s.toLowerCase();
      s = s.replace(/<\/?[^>]+(>|$)/g, "");
      s = s.replace(/[ ]{2,}/gi," ");
      s = s.replace(/\n /,"\n");
      s = s.replace(/[^\w\s]/gi, '');
      s = s.replace(/\r?\n|\r/g, ' ');
      var allwords = s.split(' '); 
      var wordcount = allwords.length;
      this.Wordcount = wordcount;
      var stats = [];
      for (var i = 0; i < wordcount; i++) {
        var word = allwords[i];
        if ( stats.hasOwnProperty( word ) ) {
          stats[word] = stats[ word ] + 1;
        }
        else {
          stats[word] = 1;
        }
      }
      var sortable = [];
      for (var sortword in stats) {
        if (stats[sortword] != 1) {
          sortable.push([sortword, stats[sortword]]);
        }
      }     
      sortable.sort(function(a, b) {
          return b[1] - a[1];
      });
      this.Frequency = sortable;

    });
  }
}
