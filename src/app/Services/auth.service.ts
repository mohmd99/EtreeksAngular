import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { AdminService } from './admin.service';
import { GeneralService } from './general.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastr:ToastrService,private router : Router ,private http : HttpClient , private admin:AdminService , private general :GeneralService) { }
  submit(email:any, password:any)
  {
    var body ={
      email:email.value.toString(),
      password: password.value.toString()
    }
    const headerDic={
      'Content-Type' :'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers: new HttpHeaders(headerDic)
    }
    this.http.post('https://localhost:44343/api/Jwt/',body,requestOptions).subscribe((resp:any)=>{
      const responce={
        token :resp.toString()
      }
      localStorage.setItem('token',responce.token);
      let data :any=jwt_decode(responce.token);
      localStorage.setItem('user',JSON.stringify({...data}));
      if(data.Roleid =='1')
      this.router.navigate(['admin']);
      else if (data.Roleid =='2')
      this.router.navigate(['admin/AllCourses']);
      else if (data.Roleid =='3')
      this.router.navigate(['admin/category']);
    },err=>{
      this.toastr.error(err.message,err.status);
    })
    
  }
}
