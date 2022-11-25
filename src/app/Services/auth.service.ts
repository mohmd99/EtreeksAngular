import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { AdminService } from './admin.service';
import { GeneralService } from './general.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private adminService : AdminService, private spinner : NgxSpinnerService, private toastr:ToastrService,private router : Router ,private http : HttpClient , private admin:AdminService , private general :GeneralService) { }
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









  Ids:any;
createuser(body: any) {



  this.spinner.show();

  this.http.post('https://localhost:44343/api/user/CreateUser', body).subscribe((resp) => {
    this.Ids=resp;
    console.log(resp);


    this.router.navigate(['auth/selectverify']);
    this.spinner.hide();





  }, err => {
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  }

  )



}

myVerfiyCode:any;

SendEmail(id:number)
{
  console.log("id is "+id);
  var body ={
  }


  this.http.post('https://localhost:44343/api/login/SendEmail/'+id,body).subscribe((resp) => {
    console.log("Email Response"+resp);
    this.router.navigate(['auth/checkverify'])

  })

}

SendWhatsapp(id:number)
{
  var body ={
  }




  this.http.post('https://localhost:44343/api/login/SendWhatsapp/'+id,body).subscribe((resp) => {
    console.log(resp);
    this.router.navigate(['auth/checkverify'])

  })

}

DeleteCode(id:number)
{

  var body ={
  }


  this.http.put('https://localhost:44343/api/login/DeleteCode/'+id,body).subscribe((resp) => {
    console.log(resp);


  })

}

checkVerify(code:number){
  var body={

  }
  this.spinner.show()
this.http.post('https://localhost:44343/api/VerfiyAccount/VerfiyAccount/'+code,body).subscribe((resp)=>{
if(code==1)
  this.router.navigate(["auth/login"]);

  this.spinner.hide()
},err=>{
this.spinner.hide();
this.toastr.error(err.message,err.status)

})
}


}
