
import { Injectable } from '@angular/core';
import { addBlogModel } from '../models/add-blog';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addBlog(addBlog: addBlogModel){
    return this.httpClient.post<any>("api/trainings/api/blogs", addBlog);
  }

  deleteBlog(blogId: string){
    return this.httpClient.get<any>("/api/trainings/api/blogs/" + blogId);
  }

  
}
