import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { addPortofolioModel } from '../models/add-portofolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  
  addPortofolio = new addPortofolioModel()

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  tokenStorage: any;
  tokenKey: any;

  oSaveAddPortofolio(){
    if(this.addPortofolio.projectName == undefined){
      alert("projectName Tidak Boleh Kosong")
    // }else if(this.addPortofolio.projectImage == undefined){
    //   alert("projectImage Tidak Boleh Kosong")
    }
      else if(this.addPortofolio.projectDescription == undefined){
      alert("projectDescription Tidak Boleh Kosong")
    }else if(this.addPortofolio.projectYear == undefined){
      alert("projectYear Tidak Boleh Kosong")
    }else{

      console.log(this.addPortofolio)

      this.tokenStorage = localStorage.getItem("apiLogin");
      this.tokenKey = JSON.parse(this.tokenStorage);

      var url = 'api/trainings/api/portfolios';
      var headers = new HttpHeaders({
        'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
        'access-control-allow-origin': 'https://dev.enigmacamp.com',
        'content-type': 'application/json; charset=UTF-8', 
        'Authorization': 'Bearer ' + this.tokenKey['token'] 
          
      });
      //console.log("Headers = ", headers);
      const obj = JSON.stringify(this.addPortofolio);

      this.httpClient.post(url, obj, { headers }).subscribe(
        (response) => {
          console.log("Isi Dari addPortofolio adalah = ", response)
          this.router.navigateByUrl('/portfolios-list')
        }, (error) => {
          console.log("Error Dari addPortofolio adalah = ", error)
          console.log("Ini Variable Obj", obj)
        })

    }
  }

}
