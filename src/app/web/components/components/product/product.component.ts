import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../modules/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() product = new Product();

    constructor() {
    }

    ngOnInit(): void {
    }

}
