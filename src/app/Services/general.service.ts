import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  homeInfo:any={};
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
}
