import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  firstname=new FormControl('',[Validators.required]);
  lastname=new FormControl('',[Validators.required]);
  phonenumber=new FormControl('+962',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  ngOnInit(): void {
  }

}
