import { Injectable } from '@angular/core';
import {Users} from './users';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = "http://localhost/angular_admin/php";
  constructor(private httpClient:HttpClient){ }

  public feed(comment,smiley)
  {
    return this.httpClient.post<any>(this.baseUrl + 'feed.php',{comment,smiley})
    .pipe(map(Users =>{
      return Users;
    }))
  }
}
