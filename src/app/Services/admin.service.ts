import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
coursesinfo:any=[{}];
display_image:any;
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



  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44343/api/course/uploadImage', file).subscribe((resp: any) => {
      this.display_image = resp.image;
    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }





  createCourse(body: any) {
    body.image = this.display_image;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDcourse', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }
  updateCourse(body:any)
  {
    if(this.display_image !=null)
     body.image = this.display_image;
     
    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDcourse',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
}
