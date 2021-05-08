import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl:'./car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailDto:CarDetailDto[]
  cars:Car[]
  currentCar: Car;
  dataLoaded = false
  filterText:string
  brands:Brand[]
  colors:Color[]
  brandFilterId:number
  colorFilterId:number

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private cardetailService:CarDetailService,
    private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarsByColorIdAndBrandId(params["brandId"],params["colorId"]);
      }
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
        this.getBrands()
        this.getColors()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByBrand(brandId:Brand){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  getCarsByColor(colorId:Color){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
  }
  getCarsByColorIdAndBrandId(colorId:number,brandId:number) {
    this.carService.getCarsByColorIdAndBrandId(brandId,colorId).subscribe(response=>
      {
        this.cars=response.data;
        this.dataLoaded=true;
      })
    }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }


  getSelectedBrand(brandId: Number) {
    if (this.brandFilterId == brandId)
      return true;
    else
      return false;
  }
  getSelectedColor(colorId: Number) {
    if (this.colorFilterId == colorId)
      return true;
    else
      return false;
  }


}
