import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../../modules/product";
import {ProductService} from "../../../services/product.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: Array<Product> = new Array<Product>();

    customOptions: OwlOptions = {
        loop: true,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['Before', 'After'],
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
        nav: true
    }

    constructor(private productServices: ProductService) {
    }

    ngOnInit(): void {
        this.productServices.getList().subscribe(data => {
            this.products = data;
            console.log(this.products)
        })
    }
}
