import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  display_file:any;

  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient,private http2 :HttpClient) { }


  uploadAttachmentteacher(file: FormData) {
    this.toaster.success();
    this.http.post('https://localhost:44343/api/user/UploadFile', file).subscribe((resp: any) => {
      this.display_file = resp.Certificate;
      this.toaster.success("created");
      console.log("teacher service  Certificate is  "+this.display_file);
  
    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }
}
