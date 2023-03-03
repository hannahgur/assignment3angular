import { Component } from '@angular/core';
import { Router } from '@angular/router';


// Landing/login page
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingPage {

  constructor(private readonly router: Router) {}

  // Login redirect
  handleLogin(): void {
    this.router.navigateByUrl("/pokemon")
  }
}
