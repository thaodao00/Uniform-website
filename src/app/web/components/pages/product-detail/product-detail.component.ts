import { Component, OnInit } from '@angular/core';
import {Product} from "../../../modules/product";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Array<Product> = new Array<Product>();
  product: Product = new Product();
  customOptions: OwlOptions = {
    loop: false,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // navText: ['Before', 'After'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    // nav: true
  }
  constructor(private productServices: ProductService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productServices.getList().subscribe(data => {
      this.products = data;
      console.log(this.products)
    })
    let id = this._route.snapshot.params['id'];
    this.productServices.getOne(id).subscribe(data=>{
      console.log(data)
      this.product =data;
    })
  }

}
