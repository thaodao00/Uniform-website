import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../modules/product";

const api = "http://localhost:3000/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getList(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>(api);
    }
}
