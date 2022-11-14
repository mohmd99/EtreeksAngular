import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  rememberMe: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  data = new FormControl();
  ngOnInit(): void {
    this.rememberMe = false;
    this.AutoLogin();

  }

 
  Remember() {

   var ev = document.getElementById("ckb1")as HTMLInputElement
    if (ev.checked) {
      localStorage.setItem('email', String(this.email.value));
      localStorage.setItem('password', String(this.password.value));
    }
  }
  AutoLogin() {
    if (localStorage.getItem('email') != '' && localStorage.getItem('password') != '') {
      this.email = new FormControl(localStorage.getItem('email'), [Validators.required, Validators.email]);

      this.password = new FormControl(localStorage.getItem('password'), [Validators.required, Validators.minLength(8)]);
    }
    console.log(this.email);


  }



}

