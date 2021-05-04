import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44368/api/"
  constructor(private httpClient: HttpClient) { }

  getCarDetails() :Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsByCarId(carId:CarDetailDto):Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl + "cars/getcardetailsbyid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
