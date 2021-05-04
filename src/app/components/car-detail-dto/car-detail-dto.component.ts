import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css']
})
export class CarDetailDtoComponent implements OnInit {

  carDetailsDto:CarDetailDto[]
  defaultPath="https://localhost:44368"
  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]) {
        this.getCarDetailDto(params["carId"])
      }
    })

  }

  getCarDetailDto(carId:CarDetailDto){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetailsDto = response.data
    })
  }
}
