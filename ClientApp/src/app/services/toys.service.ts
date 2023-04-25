import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Itoys } from "../models/toysinterface";
import { Formtoys } from "../models/form.model"

@Injectable({
  providedIn: 'root'
})
export class ToysService {
  constructor(private http: HttpClient) {
  
  }
  getAll(): Observable<Itoys[]> {
    return this.http.get<Itoys[]>('https://localhost:44450/assets/index.json');
  }
  getAllServer(): Observable<Itoys[]> {
    return this.http.get<Itoys[]>('https://localhost:7052/api/toys/GetAll');
  }
  getAllDB(): Observable<Itoys[]> {
    return this.http.get<Itoys[]>('https://localhost:7052/api/DB/GetAllDB');
  }
  createProduct(product: Formtoys) {
    return this.http.post('https://localhost:7052/api/DB/PostDB', product);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
