import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('Verifydialog') callVerify!:TemplateRef<any>;

  constructor(public dialog:MatDialog,private authService :AuthService, private route:Router , private spinner:NgxSpinnerService) { }

  VerifyCode=new FormControl();

  registerForm :FormGroup= new FormGroup({
      first_Name : new FormControl('',[Validators.required]),
      last_Name : new FormControl('',[Validators.required]),
      phone_Number : new FormControl('+962',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
      birth_Date : new FormControl('', [Validators.required]),
      role_Id : new FormControl('', [Validators.required])

})




  ngOnInit(): void {
  }




  matchError(){
    if(this.registerForm.controls['password'].value==
    this.registerForm.controls['confirmPassword'].value)
    this.registerForm.controls['confirmPassword'].setErrors(null);
    else
    this.registerForm.controls['confirmPassword'].setErrors({mismatch:true});

  }
  goToLogin(){
    this.route.navigate(['auth/login'])
  }
id:any
  submit(){

   


 this.registerForm.removeControl('confirmPassword');
 this.registerForm.controls['role_Id'].setValue(3);
 this.id=this.authService.createuser(this.registerForm.value);
 console.log(this.authService.Ids[0].value);
 
 
//  this.dialog.open(this.callVerify);




  }

  Sendemail(){
    this.authService.SendEmail(this.authService.Ids[0].value);
    
    // if(num==1)
    // this.authService.SendEmail(this.authService.Ids[0].value);
    // else
    // this.authService.DeleteCode(this.authService.Ids[0].value);
  
    // this.authService.SendWhatsapp(this.authService.Ids[1].value);
    // this.authService.DeleteCode(this.authService.Ids[0].value);
   
  }







}
