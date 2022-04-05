import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/phones";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(urlApi);
  }
  getProduct(id: number): Observable<any>{
    return this.http.get(`${urlApi}/${id}`)
  }
  getNewProduct(): Observable<any>{
    return this.http.get(`${urlApi}?_sort=id&_order=desc&_limit=8`)
  }
}
