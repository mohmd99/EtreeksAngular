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

  Courses:any;
  AvailableTimes:any;

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
  updateUser(body:any)
  {
  if(this.display_image_user !=null)
  body.image = this.display_image_user;

  this.spinner.show();
  this.http.put('https://localhost:44343/api/CRUDuser',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })
  }
  updateUserlogin(body:any)
  {
  if(this.display_image_user !=null)
  body.image = this.display_image_user;

  console.log('body is: ');
  console.log(body);
  this.spinner.show();
  this.http.put('https://localhost:44343/api/User/Update',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
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
      this.AllUser=resp
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }
  userbyid:any={}
  loginuserbyid:any={}
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
      this.userbyid=resp

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

  searchTrainer(name:string){


      this.http.get("https://localhost:44343/api/trainer/searchTrainer/"+name).subscribe((res)=>{
  this.trainerUser=res;

      },err=>{
        this.spinner.hide();
        this.toaster.error(err.message,err.status);
        console.log(err);
      })
  }

  uploadAttachmentuser(file: FormData) {
    this.http.post('https://localhost:44343/api/user/uploadImage', file).subscribe((resp: any) => {
      this.display_image_user = resp.image;
      console.log(this.display_image_user);

    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }

  GetAllTimes(teacher_id:number){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/AvailableTime/GetByTrainer/"+teacher_id).subscribe((res:any)=>{
      this.AvailableTimes=res;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }

  createTime(body:any){

    this.spinner.show();
  this.http.post('https://localhost:44343/api/CRUDAvailableTime/',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Created Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })

    //CRUDAvailableTime

  }

  deleteTime(id:number){
    this.spinner.show();

  this.http.delete('https://localhost:44343/api/CRUDAvailableTime/Delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
      this.toaster.success('Deleted Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })

  }

  GetCourses(teacher_id:number){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/trainercourse/GetTrainerCourse/"+teacher_id).subscribe((res:any)=>{
      this.Courses=res;
      console.log(this.Courses);
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }
  Traineruserbyid:any;
getTraineruserbyid(id:number){

  this.http.get("https://localhost:44343/api/Trainer/getTrainerUser/"+id).subscribe((res:any)=>{
    this.Traineruserbyid=res;
    console.log(res);


  },err=>{

    this.toaster.error(err.message,err.status);
  });
}
createtrainercourse(body:any){
  this.spinner.show();
  this.http.post('https://localhost:44343/api/CRUDtrainercourse/',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Created Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })
}
deleteTrainerCourse(id:number){
  this.spinner.show();

this.http.delete('https://localhost:44343/api/CRUDAvailableTime/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
    this.toaster.success('Deleted Successfully !!');
},err=>{
  this.spinner.hide();
  this.toaster.error(err.message, err.status);
})

}
}
