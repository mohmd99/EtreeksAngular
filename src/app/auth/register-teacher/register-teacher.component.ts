import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  
  
  constructor(private teacherService:TeacherService,private router:Router, private authService:AuthService , private spinner:NgxSpinnerService , private http:HttpClient ,private adminService:AdminService) { }
  certificate1 :any;
 
  registerTeacherForm:FormGroup=new FormGroup({
    first_Name : new FormControl('',[Validators.required]),
    last_Name : new FormControl('',[Validators.required]),
    phone_Number : new FormControl('+962',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    certificate : new FormControl(),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
    birth_Date : new FormControl('', [Validators.required]),
    role_Id : new FormControl()
  })
  ngOnInit(): void {
  }
  matchError(){
    if(this.registerTeacherForm.controls['password'].value==
    this.registerTeacherForm.controls['confirmPassword'].value)
    this.registerTeacherForm.controls['confirmPassword'].setErrors(null);
    else
    this.registerTeacherForm.controls['confirmPassword'].setErrors({mismatch:true});

  }
  goToLogin(){
    this.router.navigate(['auth/login'])
  }
  id:any
  submit(){
    console.log("certificate is :  "+ this.registerTeacherForm.controls['certificate'].value);
 this.registerTeacherForm.removeControl('confirmPassword');
 this.registerTeacherForm.controls['role_Id'].setValue(2);
 this.id=this.authService.createuser(this.registerTeacherForm.value);
 console.log(this.authService.Ids[0].value);
}
UploadFile(file:any){
  if(file.length==0)
  {
    return;
  }
  let filetoupload=<File>file[0];
  const formData=new FormData();
  formData.append(file,filetoupload,filetoupload.name);
  this.registerTeacherForm.controls['certificate'].setValue(filetoupload.name);
  this.teacherService.uploadAttachmentteacher(formData);

}
}