import { Component, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RestAPI } from '../restAPI.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: '../search/search.component.html',
  styleUrls: ['../search/search.component.css']
})

export class SearchComponent {

  constructor(
    private RestAPI: RestAPI,
    private route: ActivatedRoute,
    private router: Router,
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
  NotFound: boolean;

  get(): void {
    var id = this.route.params['_value'].string;
    this.RestAPI.getSearchResults(id).then(response => {
      if (response.search_results != 'undefined') {
        this.SearchResults = response;
      }
    });
  }

  search(term: string): void {
    this.NotFound = false;
    if (term == '') {
    }
    else {
      this.RestAPI.getSearchResults(term).then(response => {
        this.SearchResults = response;
        //console.log(response.search_results);
        if (typeof response.search_results === 'undefined') {
          this.NotFound = true;
        }
        this.router.navigate(["search", term]);
      });
    }
  }

}
