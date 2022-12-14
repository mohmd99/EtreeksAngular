import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient) { }


  AllUser:any=[{}];
  AllTrainerCourse:any=[{}];
  display_image_user:any;


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
  uploadAttachmentuser(file: FormData) {
    this.http.post('https://localhost:44343/api/user/uploadImage', file).subscribe((resp: any) => {
      this.display_image_user = resp.image;
      console.log(this.display_image_user);

    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }
  getloginuserbyid(id:number){
    this.http.get('https://localhost:44343/api/Login/GetByUserId/'+id).subscribe((resp) => {
      console.log("loginuserbyid id = "+id.toString());
      console.log("loginuserbyid = "+resp);
      this.loginuserbyid=resp

      this.color=this.Colors[this.userbyid.last_Name.toUpperCase().charCodeAt(0)-65]
      console.log(this.color);

      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  GetTrainerCourse(){
    this.spinner.show();
    this.http.get('https://localhost:44343/api/CRUDtrainercourse').subscribe((resp)=>{
      console.log(resp);

      this.AllTrainerCourse=resp;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }
  trainersbycourse:any;

  GetTrainerByCourseId(course_id:number){
    this.spinner.show();
    this.http.get('https://localhost:44343/api/trainercourse/GetTrainerByCourseId/'+course_id).subscribe((resp)=>{
      console.log(resp);

      this.trainersbycourse=resp;



      this.trainersbycourse.forEach((element:any) => {
        let lctn= JSON.parse(element.location);

        element.location=lctn;


      });

      console.log(this.trainersbycourse);





      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }
  SearchTrainerByCourseId(course_id:number,c_name:string){
    this.spinner.show();
    this.http.get('https://localhost:44343/api/trainercourse/SearchTrainerByCourseId/'+course_id+'/'+c_name).subscribe((resp)=>{
      console.log(resp);

      this.trainersbycourse=resp;



      this.trainersbycourse.forEach((element:any) => {
        let lctn= JSON.parse(element.location);

        element.location=lctn;


      });

      console.log(this.trainersbycourse);





      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }
  trainersbycourseID:any;
  get_TrainerCourseID(c_id:number,t_id:number){
    this.spinner.show();
    this.http.get('https://localhost:44343/api/trainercourse/GetIdTrainerCourse/'+c_id+'/'+t_id).subscribe((resp)=>{
      console.log(resp);

      this.trainersbycourseID=resp;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }
  createReservation(body:any){

    this.spinner.show();
    this.http.post('https://localhost:44343/api/CRUDReservation/',body).subscribe((resp)=>{
      console.log(resp);
      this.toaster.success("Please wait for the trainer acceptance","the initial reservation done succesfuly!!")
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }

  AvailableTimes:any;
  GetAllTimes(teacher_id:number){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/AvailableTime/GetByTrainer/"+teacher_id).subscribe((res:any)=>{
      this.AvailableTimes=res;
      this.AvailableTimes=this.AvailableTimes.filter((x:any) => x.status == null);

    console.log(res) ;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }


  //
  PendingReservation:any;
  RejectedReservations:any;
  AcceptedReservation:any;
  AllReservations:any;
  GetAllReservations(user_id:number){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/reservation/getreservationbyuser/"+user_id).subscribe((res:any)=>{
      this.AllReservations=res;
      this.AcceptedReservation=this.AllReservations.filter((x:any) => x.status == 1);
      this.PendingReservation=this.AllReservations.filter((x:any) => x.status == null);
      this.RejectedReservations=this.AllReservations.filter((x:any) => x.status == 0);

    console.log(res) ;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }

  createReview(body:any){

    const headerDic={
      'Content-Type' :'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers: new HttpHeaders(headerDic)
    }

    this.spinner.show();
    this.http.post('https://localhost:44343/api/review/createreview/',body,requestOptions).subscribe((resp)=>{
      console.log(resp);
      this.toaster.success("Review Submitted!!")
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message , err.status);
    })
  }

  CreateTestimonial(body:any){
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDTestimonial',body).subscribe((resp)=>{
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    })
  }
  


}
