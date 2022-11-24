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
  birth_Date : new FormControl('', [Validators.required])

})



LogInForm :FormGroup= new FormGroup({

  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.minLength(8)]),

  role_Id : new FormControl('', [Validators.required]),
  user_Id : new FormControl('')


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

    var body ={

      first_Name : this.registerForm.controls['first_Name'].value ,
        last_Name : this.registerForm.controls['last_Name'].value ,
        phonenumber : this.registerForm.controls['email'].value ,
        birth_Date : this.registerForm.controls['birth_Date'].value

    }




    this.LogInForm.controls['email'].setValue( this.registerForm.controls['email'].value );
    this.LogInForm.controls['password'].setValue( this.registerForm.controls['password'].value );
    this.LogInForm.controls['role_Id'].setValue( 3 );
    this.LogInForm.controls['user_Id'].setValue( 4 );



 this.id=this.authService.createuser(body,this.LogInForm);

console.log(this.LogInForm.value);

this.authService.GetLoginbyId(this.authService.myLoginId)


setTimeout(() => {
console.log(this.authService.myLogInObj);

this.authService.SendEmail(this.authService.myLogInObj.Verfiy_Code,this.authService.myLogInObj.email);
this.authService.DeleteCode(this.authService.myLoginId);
}, 4000);



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
          // else if(result=='Whatsapp'){
          //   this.authService.SendWhatsapp(this.authService.myLoginId);
          //   this.authService.DeleteCode(this.authService.myLoginId);
          // }

        }
      })
  }







}
