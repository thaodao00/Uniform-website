import { Component, OnInit } from '@angular/core';
import {Product} from "../../../modules/product";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = new Array<Product>();

  constructor(private productServices: ProductService) {

  }

  ngOnInit(): void {
    this.productServices.getList().subscribe(data=>{
      this.products= data;
      console.log(this.products)
    })

  }

}
