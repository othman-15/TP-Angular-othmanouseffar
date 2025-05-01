import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';


@Injectable()
export class ProductServiceService {
  private host:string="http://localhost:3000";

  constructor(private http:HttpClient) { }
  getAllProduct() : Observable<any>{

    return this.http.get(this.host+"/api/products");
  }
}
