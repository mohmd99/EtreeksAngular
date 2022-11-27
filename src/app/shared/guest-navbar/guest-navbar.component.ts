import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-navbar',
  templateUrl: './guest-navbar.component.html',
  styleUrls: ['./guest-navbar.component.css']
})
export class GuestNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  GoToHome(){
    this.router.navigate([''])
  }
  GoToAbout(){
    this.router.navigate(['about'])
  }
  GoToContact(){
    this.router.navigate(['contact'])
  }
  GoToLogin(){
    this.router.navigate(['auth/login'])
  }
}
