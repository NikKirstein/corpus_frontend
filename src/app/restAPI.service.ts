import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestAPI {
  private textBase = 'https://writecrow.corporaproject.org/api/text/';
  private searchBase = 'https://writecrow.corporaproject.org/api/search/';

  constructor(
    public http: Http
  ) {}

  getSearchResults(string): Promise<any>
  {
    return this.http.get(this.searchBase + string + '/all').map(response => {
      return response.json() || {success: false, message: "No response from server"};
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

  getText(id): Promise<any>
  {
    return this.http.get(this.textBase + id).map(response => {
      return response.json() || {success: false, message: "No response from server"};
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

}
