import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addBlogModel } from '../models/add-blog';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addBlog(addBlog: addBlogModel){
    return this.httpClient.post("api/trainings/api/blogs", addBlog);
  }

  
}
