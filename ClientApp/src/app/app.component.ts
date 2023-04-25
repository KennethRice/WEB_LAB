import { Component, Input, OnInit } from '@angular/core';
import { Itoys } from './models/toysinterface';
import { toyslist as mydata } from './data/toyslist';
import { ToysService } from './services/toys.service';
import { toyslist } from './mycomponents/Storetoys/toys.component';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Formtoys } from "./models/form.model"
import { AuthenticatedResponse, FormLogin, LoginModel } from './models/login.model';
import { LoginService } from './services/login.service';
//import { JwtHelperService } from '@auth0/angular-jwt';

//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { Router, RouterModule } from '@angular/router';
//import { AuthenticatedResponse, LoginModel } from './models/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
  title = 'app';
  toys: Itoys[] = [];
  listtoys: Itoys[] = [];
  logins: FormLogin[] = [];
  buttonselected = 0;
 //sS myForm!: FormGroup;
  loginform = new FormLogin();
  formtoys = new Formtoys()
  addtoy = false;
  fals = false;
  tru = true;
  maxid = 0;


  isauthorized = true;
  buttonlogin = false;
  buttonreg = false;
  invalidLogin?: boolean;
  addlogin = false;
  credentials: FormLogin = { userName: "", password: "" };
  
  choosestore1: any;
  choosestore2: any;

  exist = ""


  regform() {
    this.buttonreg = !this.buttonreg;
  }
  additem() {
    this.addtoy = !this.addtoy
  }

  toggle(num: number) {
    this.buttonselected = num;
  }

  butlog() {
    this.buttonlogin = !this.buttonlogin;
  }



  constructor(private toysServise: ToysService, private http: HttpClient) {

  }



  login() {
    this.http.post<AuthenticatedResponse>("https://localhost:7052/api/auth/login", this.credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.isauthorized = false;
          ((data: FormLogin) => this.logins.push(data));
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    this.buttonlogin = !this.buttonlogin;

  }

  signin() {
    this.http.post('https://localhost:7052/api/Auth/PostDB', this.credentials)
      .subscribe(((data: FormLogin) => this.logins.push(data)));
    this.buttonreg = !this.buttonreg;

  }
  save() {
    this.formtoys.id = this.maxid + 1;
    this.maxid = this.maxid = 1;
      this.formtoys.store1 = this.choosestore1 === "true" ? true : false
      this.formtoys.store2 = this.choosestore2 === "true" ? true : false
      this.toysServise.createProduct(this.formtoys)
        .subscribe((data: Formtoys) => this.toys.push(data));
      this.addtoy = !this.addtoy;

  }
  isUserLogin() {
    let existUser = localStorage.getItem("jwt");
    if (existUser == null) {
      this.exist = "null";
    } else {
      this.exist = existUser;
    }
    return existUser && existUser.length > 0;

  }
  logout() {
    this.isauthorized = true;
    localStorage.removeItem("jwt");

  }

  getmaxid(id?: number) {
    if (id != null) {
      if (this.maxid <= id) {
        this.maxid = id;
      }
      
    }
  }

    

  ngOnInit(): void {
    this.toysServise.getAllDB().subscribe(toyslist => {
      this.toys = toyslist
    });

  }
}


