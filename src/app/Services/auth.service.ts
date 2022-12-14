import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { AdminService } from './admin.service';
import { GeneralService } from './general.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'rxjs';
import { TeacherService } from './teacher.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private adminService : AdminService, private spinner : NgxSpinnerService, private toastr:ToastrService,private router : Router ,private http : HttpClient , private admin:AdminService , private general :GeneralService ,private teacherService:TeacherService) { }
 data:any;
  submit(email:any, password:any)
  {
    var body ={
      email:email.value.toString(),
      password: password.value.toString()
    }

    this.getloginbyemail(email.value.toString());

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
       this.data =jwt_decode(responce.token);
      localStorage.setItem('user',JSON.stringify({...this.data}));

      this.spinner.show();

    
      setTimeout(() => {
        if (this.data.Roleid =='2')
        {
          debugger


            this.teacherService.getTraineruserbyid(Number(this.data.ID));
        }
        
      }, 2000);
      
      setTimeout(() => {




        this.spinner.hide();
        if(this.data.Roleid =='1')
        this.router.navigate(['admin']);


        else if (this.data.Roleid =='2')
        {
          debugger


            // this.teacherService.getTraineruserbyid(this.data.ID);
           
            
              
              if( this.teacherService.Traineruserbyid[0].status==1)
              this.router.navigate(['teacher/home']);
              else
              {
               this.toastr.warning('Please wait the admin approval','Your account is not Activated yet')
              }
              
         


      }




        else if (this.data.Roleid =='3'){
          if(this.loginbyid.verify_Code==1){

        this.router.navigate(['student/home']);
      }

          else{
            console.log(this.login_id);

            this.resendCode(this.login_id);

          }
        }


      },4000);




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

checkVerify(code:number,id:number){
  var body={

  }
  this.spinner.show()
this.http.post('https://localhost:44343/api/VerfiyAccount/VerfiyAccount/'+code+'/'+id,body).subscribe((resp)=>{


  this.spinner.hide()
},err=>{
this.spinner.hide();
this.toastr.error(err.message,err.status)

})
}
loginbyid:any;
getloginbyid(id:number){

  this.http.get('https://localhost:44343/api/crudlogin/getbyid/'+id).subscribe((resp)=>{
this.loginbyid=resp;


  },err=>{

  this.toastr.error(err.message,err.status)

  })
}
resendCode(id:number){
  var body ={
  }


  this.http.put('https://localhost:44343/api/user/resend/'+id,body).subscribe((resp) => {

    this.router.navigate(['auth/selectverify'])

  })
}
login_id:any;
getloginbyemail(email:string){


  this.http.get('https://localhost:44343/api/Login/GetIdByEmail/'+email).subscribe((resp) => {
    console.log("loginuserbyid id = "+email);
    console.log("loginuserbyid = "+resp);
    this.login_id=resp;
  this.getloginbyid(this.login_id);


  }
  )
}
allLogin:any;
adminuser:any;
teacheruser:any;
studentuser:any;
getalllogin(){
  this.http.get('https://localhost:44343/api/crudlogin/').subscribe((resp) => {

    this.allLogin=resp;
   this.adminuser= this.allLogin.filter((x:any)=>x.role_Id==1);
   this.teacheruser= this.allLogin.filter((x:any)=>x.role_Id==2);
   this.studentuser= this.allLogin.filter((x:any)=>x.role_Id==3);
  this.getloginbyid(this.login_id);


  }
  )
}

}
