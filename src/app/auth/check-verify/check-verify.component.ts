import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-verify',
  templateUrl: './check-verify.component.html',
  styleUrls: ['./check-verify.component.css']
})
export class CheckVerifyComponent implements OnInit {

  constructor(private authService:AuthService,public toast:ToastrService,public router:Router) { }
 disable:boolean=false;
  ngOnInit(): void {
    setTimeout(() => {
      this.resendcode();
    },10000);
    
    this.authService.getloginbyid(this.authService.Ids[0].value);
   
  }

  checkverify(ev:any){


if(ev.target.value==this.authService.loginbyid.verify_Code){
  this.authService.checkVerify(ev.target.value,this.authService.Ids[0].value);
  this.toast.success('the verfiy is successs');
  this.router.navigate(['/auth/login']);
}
else{
  this.toast.error('the verfiy is notsuccess ');
}
 }

 resendcode(){
  console.log(this.disable);
 this.disable=true;
 console.log(this.disable);


 }
}
