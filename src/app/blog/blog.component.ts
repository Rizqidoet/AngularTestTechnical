
import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { addBlogModel } from '../models/add-blog';
import { AddBlogService } from '../services/add-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  addBlog = new addBlogModel()
  titlePage: string = "Tambah data baru blog";
  buttonCTA: string = "Simpan";

  constructor(
    private http: HttpClient,
    private addBlogService: AddBlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(history.state){
      const a = history.state;
      console.log(a.data)
      if(a.data != undefined){
        this.titlePage = "Ubah data blog"
        this.buttonCTA = "Ubah"
        this.addBlog = a.data;
      }
      
    }
  }

  tokenStorage: any;
  tokenKey: any;

  onSaveAddBlog(){

    console.log(this.addBlog);

    if(this.addBlog.title == undefined){
      alert("Title Tidak Boleh Kosong")
    }else if(this.addBlog.content == undefined){
      alert("Content Tidak Boleh Kosong")
    }else if(this.addBlog.author == undefined){
      alert("Author Tidak Boleh Kosong")
    }else if(this.addBlog.url == undefined){
      alert("URL Tidak Boleh Kosong")
    }else{
      
      if(this.titlePage == "Tambah data baru blog"){
        console.log("Button text = Simpan")
        this.tokenStorage = localStorage.getItem("apiLogin");
        this.tokenKey = JSON.parse(this.tokenStorage);

        var url = 'api/trainings/api/blogs';
        var headers = new HttpHeaders({
          'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
          'access-control-allow-origin': 'https://dev.enigmacamp.com',
          'content-type': 'application/json; charset=UTF-8', 
          'Authorization': 'Bearer ' + this.tokenKey['token'] 
            
        });
        // console.log("Headers = ", headers);
        const obj = JSON.stringify(this.addBlog);

        this.http.post(url, obj, { headers }).subscribe(
          (response) => {
            this.router.navigateByUrl('/blog-list')
            console.log("Berhasil simpan data blog adalah = ", response)
          }, (error) => {
            console.log("Gagal simpan data blog adalah = ", error)
            console.log("Ini Variable Obj", obj)
          })

      }else{
        console.log("Button text = Ubah")
        this.tokenStorage = localStorage.getItem("apiLogin");
        this.tokenKey = JSON.parse(this.tokenStorage);

        var url = 'api/trainings/api/blogs';
        var headers = new HttpHeaders({
          'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
          'access-control-allow-origin': 'https://dev.enigmacamp.com',
          'content-type': 'application/json; charset=UTF-8', 
          'Authorization': 'Bearer ' + this.tokenKey['token'] 
            
        });
        // console.log("Headers = ", headers);
        const obj = JSON.stringify(this.addBlog);

        this.http.put(url, obj, { headers }).subscribe(
          (response) => {
            this.router.navigateByUrl('/blog-list')
            console.log("Berhasil ubah data blog adalah = ", response)
          }, (error) => {
            console.log("Gagal ubah data blog adalah = ", error)
            console.log("Ini Variable Obj", obj)
          })
      }

      

    }
  }

}
