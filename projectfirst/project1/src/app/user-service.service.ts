import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http:HttpClient) { }


  public doRegistration(us:any){

     return this.http.post("http://localhost:8080/save-user", us, {responseType : "text" as "json"});

  }
  public getUser(){

    return this.http.get("http://localhost:8080/all-users");

 }
 public getUserByUsername(username :any){

  return this.http.get("http://localhost:8080/serach/"+username);

}
public deleteUser(username :any){

  return this.http.get("http://localhost:8080/delete/"+username);

}
public updateUser(us:any){

  return this.http.put("http://localhost:8080/update", us, {responseType : "text" as "json"});

}
}
