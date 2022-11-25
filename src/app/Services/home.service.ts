import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  allcontactus:any=[{}];
  aboutInfo:any={};
  constructor(private tostar :ToastrService,  private spinner :NgxSpinnerService , private http:HttpClient ) { }

  CreateContactUs(body:any){
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDContactUs',body).subscribe((resp)=>{
      console.log(resp);
      this.spinner.hide();
      this.tostar.success('Created !!');
    },err=>{
      this.spinner.hide();
      this.tostar.error(err.message,err.status);
    })
  }

  GetAbout(body:any){
    this.spinner.show();
    this.http.get('https://localhost:44343/api/CRUDAbout',body).subscribe((resp)=>{
      this.aboutInfo=resp;
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.tostar.error(err.message,err.status)
    })
  }
} 
