import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { loginModel } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient 
    ) { }

    onLogin(login: loginModel){
      return this.httpClient.post("api/trainings/api/auth/login", login);
    }
}
