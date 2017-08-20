import { Component, Input } from '@angular/core';
import { RestAPI } from './restAPI.service';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  templateUrl: './templates/search.component.html',
  styleUrls: ['./css/app.component.css']
})

export class SearchComponent {

  constructor(
    private RestAPI: RestAPI,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    var string = this.route.params['_value'].string;
    if (typeof(string) == 'undefined') {
    }
    else {
      this.get();
    }
  }

  SearchResults: {};

  get(): void {
    var id = this.route.params['_value'].string;
    this.RestAPI.getSearchResults(id).then(response => {
      this.SearchResults = response;
      console.log(this.SearchResults);
    });
  }

}
