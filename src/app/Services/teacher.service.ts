import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  display_file:any;
  display_cv:any;

  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient) { }

  AllUser:any=[{}];
  display_image_user:any;
  uploadAttachmentteacher(file: FormData) {

    this.http.post('https://localhost:44343/api/user/UploadFile', file).subscribe((resp: any) => {
      this.display_file = resp.certificate;
      this.toaster.success("created certificate");
      console.log("teacher service  Certificate is  "+this.display_file);

    }, err => {
      this.toaster.error(err.message,err.status);
      console.log(err);
    })
  }
  uploadCVTeacher(file: FormData) {

    this.http.post('https://localhost:44343/api/user/UploadCV', file).subscribe((resp: any) => {
      this.display_cv = resp.cv;
      this.toaster.success("created cv");
      console.log("teacher service  CV is  "+this.display_cv);

    }, err => {
      this.toaster.error(err.message,err.status);
      console.log(err);
    })
  }
  createTeacher(body:any){
    body.certificate=this.display_file;
    body.cv=this.display_cv;
    console.log(this.display_file);
    console.log(this.display_cv);

    this.http.post('https://localhost:44343/api/trainer/CreateTrainer', body).subscribe((resp: any ) => {

      this.toaster.success("created");


    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }

  trainerUser:any
  getTrainerUser(){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/trainer/getTrainer").subscribe((res)=>{
this.trainerUser=res;
this.spinner.hide()
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
      console.log(err);
    })
  }
  getUser(){
    this.http.get('https://localhost:44343/api/CRUDuser').subscribe((resp) => {
      console.log(resp);
      this.AllUser=resp;
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }
  userbyid:any={};
  loginuserbyid:any={};

  Colors:any[]=[
    "#8B7E74",
  "#344D67",
  "#8B7E74",
  "#C7BCA1",
  "#497174",
  "#3A8891",
  "#6D9886",
  "#8D9EFF",
  "#9BA17B",
  "#5DA7DB",
  "#9E7676",
  "#98A8F8",
  "#251B37",
  "#1C6758",
  "#704F4F",
  "#FF731D",
  "#AC4425",
  "#A10035",
  "#D1512D",
  "#18978F",
  "#B20600",
  "#00092C",
  "#D9534F",
  "#8A8635",
  "#630000",
  "#334756",
  "#6C4A4A",
  "#105652",
  "#694E4E"
    ]

    color:any="";
  getuserbyid(id:number){
    this.http.get('https://localhost:44343/api/CRUDuser/Getbyid/'+id).subscribe((resp) => {
      console.log(resp);
      this.userbyid=resp;

      this.color=this.Colors[this.userbyid.last_Name.toUpperCase().charCodeAt(0)-65]
      console.log(this.color);

      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }
  getloginuserbyid(id:number){
    this.http.get('https://localhost:44343/api/Login/GetByUserId/'+id).subscribe((resp) => {
      console.log("loginuserbyid id = "+id.toString());
      console.log("loginuserbyid = "+resp);
      this.loginuserbyid=resp;

      this.color=this.Colors[this.userbyid.last_Name.toUpperCase().charCodeAt(0)-65]
      console.log(this.color);

      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )

  }
}
