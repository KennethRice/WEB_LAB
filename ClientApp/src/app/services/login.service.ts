import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Formtoys } from "../models/form.model"
import { FormLogin } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  
  }
  createUser(product: FormLogin) {
    return this.http.post('https://localhost:7052/api/Auth/PostDB', product);
  }
  Login(product: FormLogin) {
    return this.http.post('https://localhost:7052/api/Auth/login', product);
  }


  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
