import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NamedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NamedProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NamedProvider Provider');
  }

}
