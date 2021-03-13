import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // bununla backend deki dataya ulaşabiliyoruz.
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44368/api/brands/getall"
  constructor(private httpClient:HttpClient) { } //HttpClient türünde bir nesne istiyorum demek. newlemek yani instance oluşturmak.

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl)

  }
}
