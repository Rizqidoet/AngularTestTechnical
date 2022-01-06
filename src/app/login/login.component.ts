import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login()

  constructor(
    private LoginService: LoginService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.login);

    if(this.login.username == undefined){
      alert("Username Tidak Boleh Kosong")
    }else if(this.login.password == undefined){
      alert("Password Tidak Boleh Kosong")
    }else {
      this.LoginService.onLogin(this.login).subscribe(
        data =>{
          console.log("Data onLogin = ", data)
        }, error =>{
          console.log("Error onLogin = ", error)
        }
      )

      this.router.navigate(['dashboard']);

    }
  }

}
