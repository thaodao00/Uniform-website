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
        dots: false,
        navSpeed: 700,
        navText: ['Before', 'Next'],
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
        nav: false
    }

    constructor(private productServices: ProductService) {
    }

    ngOnInit(): void {
        // this.productServices.getList().subscribe(data => {
        //     this.products = data;
        // })
        this.seekProductsRecommend();
    }

    seekProductsRecommend(): void {
        let x = new Product();
        x.thumbnail = "./assets/products/img3.png";
        x.name = "Kids Girl's School Uniform Clothing Long Sleeved Chorus of Primary Students Reading British Student Women's Uniforms Black Skirt S";
        x.oldPrice = 27;
        x.price = 24.9;
        this.products.push(x);
        let z = new Product();
        z.thumbnail = "./assets/products/img4.png";
        z.name = "JK kindergarten clothing summer school primary school uniform mini japan korean style school uniform";
        z.oldPrice = 32;
        z.price = 29.9;
        this.products.push(z);
        let y = new Product();
        y.thumbnail = "./assets/products/img1.png";
        y.name = "Student Long Sleeve Chorus School Uniform Junior High School Boys and Students Students Japan and South Korea JK Uniform Set";
        y.oldPrice = 45;
        y.price = 39.9;
        this.products.push(y);
        let a = new Product();
        a.thumbnail = "./assets/products/img2.png";
        a.name = "Custom British School Blazer Suit Secondary School Uniform High School Uniform";
        a.oldPrice = 12;
        a.price = 9.9;
        this.products.push(a);
        let b = new Product();
        b.thumbnail = "./assets/products/img5.png";
        b.name = "Korean school uniform";
        b.oldPrice = 22;
        b.price = 19.9;
        this.products.push(b);
    }
}
