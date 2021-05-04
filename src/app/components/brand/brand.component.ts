import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = []
  dataLoaded  = false;
  currentBrand:Brand  // active için gerekli
  filterText:string = '';

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true
    })
  }
  // htmlde click imizi componente set ettik
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
  }
  // seçili olan ise mavi yap olmayanları normal bırak işlemini yaptık.
  getCurrentBrand(brand:Brand){
    if (brand == this.currentBrand) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  setAllCurrentBrand(){
    if(this.currentBrand){
      this.currentBrand = {brandId:0 , brandName:""}
    }
  }

}
