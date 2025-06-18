import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';


@Injectable()
export class ProductServiceService {
  private host: string = "http://localhost:8083";
  constructor(private http:HttpClient) { }
  getAllProduct() : Observable<any>{

    return this.http.get<Product[]>(this.host + "/api/products");
  }
  getProductbyid(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.host}/api/products/${id}`);
  }
}
