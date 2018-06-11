import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GradesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GradesProvider {

  // private url: string = "../../assets/data.json";
  private url: string = "http://blokcijferapp-am1a.nl/data.php";
  private url_update_residence: string = "http://blokcijferapp-am1a.nl/update_residence.php";

  constructor(public http: HttpClient) {
    console.log('Hello GradesProvider Provider');
  }

  // Een functie in een klasse heet een method
  public getGrades() {
    return this.http.get(this.url, {responseType: "json"});
  }


  public updateResidence(id, residence) {

    let params = new HttpParams();
    params = params.set("id", id );    
    params = params.set("residence", residence );

    return this.http.post(this.url_update_residence, params, {responseType: "json"});
  }

}
