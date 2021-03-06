import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL="http://localhost:3000"; 
  }

  authentcation(username:string,email:string,password:string,name:string){
    
    return this.http.post("http://localhost:3000/signup",{username,email,password,name},{observe:'response'})
  }

  setSession(user_id,accessToken,refreshToken){
    localStorage.setItem("_id",user_id);
    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("refreshToken",refreshToken);
    
  }

  removeSession(){
    localStorage.removeItem("_id");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    
  }

  logout(){
    this.removeSession();
  }



  


}
