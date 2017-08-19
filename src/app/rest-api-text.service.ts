import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RESTAPIText {
  private texturl = 'http://crow.local/api/text/';

  constructor(
    public http: Http
  ) {}

  getText(id): Promise<any>
  {
    return this.http.get(this.texturl + id).map(response => {
      return response.json() || {success: false, message: "No response from server"};
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

}
