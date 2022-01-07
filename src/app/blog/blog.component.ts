import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private http: HttpClient,
    private addBlogService: AddBlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
      // this.addBlogService.addBlog(this.addBlog).subscribe(
      //   data =>{
      //     console.log("Isi Dari addBlog adalah = ", data)
      //   }, error =>{
          
      //     console.log("Error Dari addBlog adalah = ", error)
      //   }
      // )
      this.tokenStorage = localStorage.getItem("testObject");
      this.tokenKey = JSON.parse(this.tokenStorage);

      // const headers = { 'Authorization': "Bearer ", 'My-Custom-Header': 'foobar' };
      // const body = {
      //     id: this.addBlog.id,
      //     title: this.addBlog.title,
      //     content: this.addBlog.content,
      //     author: this.addBlog.author,
      //     url: this.addBlog.url
      // };
      // this.http.post<any>('api/trainings/api/blogs', body, { headers }).subscribe(data => {
      //     this.postId = data.id;
      //     console.log('postID = ', this.postId)
      // });

      //localStorage.setItem('user', this.addBlog.title);
      //JSON.parse(localStorage.getItem('user'));
      

      var url = 'api/trainings/api/blogs';
      var headers = new HttpHeaders({
        'access-control-allow-methods': 'GET,PUT,POST,DELETE,HEAD,OPTIONS', 
        'access-control-allow-origin': 'https://dev.enigmacamp.com',
        'content-type': 'application/json; charset=UTF-8', 
        'Authorization': 'Bearer ' + this.tokenKey['token'] 
          
      });
      console.log("Headers = ", headers);
      const obj = JSON.stringify(this.addBlog);

      this.http.post(url, obj, { headers }).subscribe(
        (response) => {
          console.log("Isi Dari addBlog adalah = ", response)
        }, (error) => {
          console.log("Error Dari addBlog adalah = ", error)
          console.log("Ini Variable Obj", obj)
        })

    }
  }

}
