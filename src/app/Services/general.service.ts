import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  homeInfo:any={};
  allabout:any={};
  allCourses:any=[{}]
  retreavedCourse:any={};
  allcategories:any=[{}];
  coursesbycategory:any=[{}];

  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient ) { }

  GetHomeInfo(){

    this.spinner.show();
    this.http.get("https://localhost:44343/api/CRUDHome").subscribe((res:any)=>{
      this.homeInfo=res;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });


  }
  GetAllCourses(){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/CRUDCourse").subscribe((res:any)=>{
      this.allCourses=res;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }

  GetCourseById(id:number){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/CRUDCourse/getbyid/"+id).subscribe((res:any)=>{
      this.retreavedCourse=res;
      this.spinner.hide();

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }

getAllCategory(){
  this.spinner.show();
  this.http.get("https://localhost:44343/api/CRUDcategory").subscribe((res:any)=>{
    this.allcategories=res;
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message,err.status);
  });
}
getCoursesbyCategoryId(cat_id:number){
  this.spinner.show();
  this.http.get("https://localhost:44343/api/course/getbycatid/"+cat_id).subscribe((res:any)=>{
    this.coursesbycategory=res;
    this.spinner.hide();
    console.log(res);

  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message,err.status);
  });

}


getabout(){
  this.spinner.show();
  this.http.get("https://localhost:44343/api/CRUDAbout").subscribe((res:any)=>{
    this.allabout=res;
    this.spinner.hide();

  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message,err.status);
  });
}

}

