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
  firstname : new FormControl('',[Validators.required]),
  lastname : new FormControl('',[Validators.required]),
  phonenumber : new FormControl('+962',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]),
  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmPassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
  birth_Date : new FormControl('', [Validators.required])

})



LogInForm :FormGroup= new FormGroup({
 
  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  verify_Code : new FormControl('', [Validators.required]),
  role_Id : new FormControl('', [Validators.required]),
  user_Id : new FormControl('', [Validators.required])
  

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

  submit(){

    var body ={
      
        firstname : this.registerForm.controls['firstname'].value , 
        lastname : this.registerForm.controls['lastname'].value , 
        phonenumber : this.registerForm.controls['email'].value , 
        birth_Date : this.registerForm.controls['birth_Date'].value 
        
    }
    

    this.authService.createuser(body);

    this.LogInForm.controls['email'].setValue( this.registerForm.controls['email'].value );
    this.LogInForm.controls['password'].setValue( this.registerForm.controls['password'].value );
    this.LogInForm.controls['role_Id'].setValue( 3 );
    this.LogInForm.controls['user_Id'].setValue( this.authService.my_id );


    this.authService.CreateLogin(this.LogInForm.value);



    this.SendCode();

    

  }

  SendCode(){
    const dialogRef=  this.dialog.open(this.callVerify);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='Email')
          {
            this.authService.GetLoginbyId(this.authService.myLoginId)
            this.authService.SendEmail(this.authService.myLogInObj.Verfiy_Code,this.authService.myLogInObj.email);
            this.authService.DeleteCode(this.authService.myLoginId);
          }
          else if(result=='Whatsapp'){
            this.authService.SendWhatsapp(this.authService.myLoginId);
            this.authService.DeleteCode(this.authService.myLoginId);
          }

        }
      })
  }

  

  



}
