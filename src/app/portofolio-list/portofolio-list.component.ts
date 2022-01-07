import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { addPortofolioModel } from '../models/add-portofolio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portofolio-list',
  templateUrl: './portofolio-list.component.html',
  styleUrls: ['./portofolio-list.component.css']
})
export class PortofolioListComponent implements OnInit {

  portofolioList: addPortofolioModel[] = [];
  tokenStorage: any;
  tokenKey: any;
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListPortofolio()
  }

  getListPortofolio(){
    this.tokenStorage = localStorage.getItem("apiLogin");
    this.tokenKey = JSON.parse(this.tokenStorage);

    var url = 'api/trainings/api/portfolios';
    var headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.tokenKey['token'],
      'My-Custom-Header': 'foobar' 
        
    });
    this.http.get<any>(url, { headers }).subscribe(data =>{
      console.log("Berhasil, Isi Response GetListBlog = ", data)
      this.portofolioList = data;
    }, error => {
      console.log("Gagal, Isi Response GetListBlog = ", error)
    })
  }

  edit(portfolios: addPortofolioModel){
    // console.log("Data Blog Terpilih = ", blog)
    this.router.navigateByUrl("portfolios-add", {state: {data: portfolios}})
  }

  delete(portfolios: addPortofolioModel){
    this.tokenStorage = localStorage.getItem("apiLogin");
    this.tokenKey = JSON.parse(this.tokenStorage);

    var url = '/api/trainings/api/portfolios/' + portfolios.id;
    var headers = new HttpHeaders({
      'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
      'access-control-allow-origin': 'https://dev.enigmacamp.com',
      'content-type': 'application/json; charset=UTF-8', 
      'Authorization': 'Bearer ' + this.tokenKey['token'] 
        
    });
    
    this.http.delete(url, { headers }).subscribe(
      (response) => {
        this.router.navigateByUrl('/portfolios-list')
        this.getListPortofolio();
        console.log("Berhasil ubah data blog adalah = ", response)
      }, (error) => {
        console.log("Gagal ubah data blog adalah = ", error)
        
      })
  }

}
