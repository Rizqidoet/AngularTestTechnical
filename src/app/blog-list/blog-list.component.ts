import { Component, OnInit } from '@angular/core';
import { addBlogModel } from '../models/add-blog';
import { AddBlogService } from '../services/add-blog.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogList: addBlogModel[] = [];
  tokenStorage: any;
  tokenKey: any;

  constructor(
    private blogService: AddBlogService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListBlog();
  }

  getListBlog(){
    this.tokenStorage = localStorage.getItem("apiLogin");
    this.tokenKey = JSON.parse(this.tokenStorage);

    var url = 'api/trainings/api/blogs';
    var headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.tokenKey['token'],
      'My-Custom-Header': 'foobar' 
        
    });
    this.http.get<any>(url, { headers }).subscribe(data =>{
      console.log("Berhasil, Isi Response GetListBlog = ", data)
      this.blogList = data;
    }, error => {
      console.log("Gagal, Isi Response GetListBlog = ", error)
    })
  }

  edit(blog: addBlogModel){
    // console.log("Data Blog Terpilih = ", blog)
    this.router.navigateByUrl("blog-add", {state: {data: blog}})
  }

  delete(blog: addBlogModel){
    
      this.tokenStorage = localStorage.getItem("apiLogin");
      this.tokenKey = JSON.parse(this.tokenStorage);

      var url = '/api/trainings/api/blogs/' + blog.id;
      var headers = new HttpHeaders({
        'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
        'access-control-allow-origin': 'https://dev.enigmacamp.com',
        'content-type': 'application/json; charset=UTF-8', 
        'Authorization': 'Bearer ' + this.tokenKey['token'] 
          
      });
      
      this.http.delete(url, { headers }).subscribe(
        (response) => {
          this.router.navigateByUrl('/blog-list')
          this.getListBlog();
          console.log("Berhasil ubah data blog adalah = ", response)
        }, (error) => {
          console.log("Gagal ubah data blog adalah = ", error)
          
        })

  }

}
