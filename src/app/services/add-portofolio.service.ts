import { Injectable } from '@angular/core';
import { addBlogModel } from '../models/add-blog';
import { HttpClient } from '@angular/common/http';
import { addPortofolioModel } from '../models/add-portofolio';

@Injectable({
  providedIn: 'root'
})
export class AddPortofolioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addPortofolio(addPortofolio: addPortofolioModel){
    return this.httpClient.post("api/trainings/api/portfolios", addPortofolio)
  }
}
