import { Component, OnInit } from '@angular/core';
import { loginModel } from '../models/login';
import { LoginService } from '../services/login.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new loginModel()

  constructor(
    private LoginService: LoginService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clearStorage()
  }

  tokenKey: any;
  tokenStorage: any;

  onLogin(){
    console.log(this.login);

    if(this.login.username == undefined){
      alert("Username Tidak Boleh Kosong")
    }else if(this.login.password == undefined){
      alert("Password Tidak Boleh Kosong")
    }else {
      this.LoginService.onLogin(this.login).subscribe(
        (data: any) =>{
          console.log("Data onLogin = ", data)
          // this.tokenKey = data['token'];
          localStorage.setItem('apiLogin', JSON.stringify(data));
          this.tokenStorage = localStorage.getItem("apiLogin");
          this.tokenKey = JSON.parse(this.tokenStorage);
          console.log("Balikan dari local storage = ", this.tokenKey['token'])

        }, (error) =>{
          console.log("Error onLogin = ", error)
        }
      )

       this.router.navigate(['dashboard']);

    }
  }

  clearStorage() {
    localStorage.removeItem('apiLogin')
  }

}
