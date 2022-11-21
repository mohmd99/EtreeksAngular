import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
coursesinfo:any=[{}]
  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient) { }

  getcoursewithcategory(){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/course/getcoursewithcategory").subscribe((res:any)=>{
      this.coursesinfo=res;
      this.spinner.hide();
      console.log(res);

      this.toaster.success("retreived");

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }
}
