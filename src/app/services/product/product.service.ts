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
    return this.http.get(`${urlApi}?_sort=id&_order=desc&_limit=8&status=0`)
  }
  removeProduct(id: number):Observable<any>{
    return this.http.delete(`${urlApi}/${id}`)
  }
  createProduct(data: any):Observable<any>{
    return this.http.post(urlApi, data);
  }
  updateProduct(id: number, data:any):Observable<any>{
    return this.http.put(`${urlApi}/${id}`, data)
  }
  getProductsClient(): Observable<any>{
    return this.http.get(`${urlApi}?status=0`);
  }
}
