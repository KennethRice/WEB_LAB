import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isUserAuthenticated = (): boolean => {
    return false
  }
  logOut = () => {
    localStorage.removeItem("jwt");
  }
}
