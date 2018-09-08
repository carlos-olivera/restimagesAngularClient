import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    
  }

  getImages() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/images').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

updateImage(data) {
  return new Promise((resolve, reject) => {
    this.http.put(this.apiUrl+'/images/' + data._id, JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
