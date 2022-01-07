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
  titlePage = "Tambah data baru portfolios"
  buttonCTA ="Simpan"
  
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    
   
    if(history.state){
      const a = history.state;
      // console.log(a.data)
      if(a.data != undefined){
        this.titlePage = "Ubah data blog"
        this.buttonCTA = "Ubah"
        this.addPortofolio = a.data;
      }
      
    }
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

      if(this.buttonCTA == "Simpan"){
        console.log("State Simpan")
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
            console.log("Berhasil simpan data portfolio adalah = ", response)
            this.router.navigateByUrl('/portfolios-list')
          }, (error) => {
            console.log("Gagal simpan data portfolio adalah = ", error)
            console.log("Ini Variable Obj", obj)
          })
      }else{
        console.log("State Ubah")
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

        this.httpClient.put(url, obj, { headers }).subscribe(
          (response) => {
            console.log("Berhasil ubah data portfolio adalah = ", response)
            this.router.navigateByUrl('/portfolios-list')
          }, (error) => {
            console.log("Gagal ubah data portfolio adalah = ", error)
            console.log("Ini Variable Obj", obj)
          })
      }
      

      

    }
  }

}
