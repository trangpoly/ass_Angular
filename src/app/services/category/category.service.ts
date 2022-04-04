import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(urlApi);
  }
  getCategory(id:number): Observable<any>{
    return this.http.get(`${urlApi}/${id}`)
  }
}
