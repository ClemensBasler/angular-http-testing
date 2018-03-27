import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  private url = 'http://localhost:8080/datalogger'; // full uri of the service to consume here

  constructor(private http: Http) { }

// MyDataModel

  get(): Observable<MyDataModel>{
    return this.http
      .get<MyDataModel>(this.url);
  }

}
