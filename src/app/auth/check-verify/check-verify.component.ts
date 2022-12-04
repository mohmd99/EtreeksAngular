import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-verify',
  templateUrl: './check-verify.component.html',
  styleUrls: ['./check-verify.component.css']
})
export class CheckVerifyComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getloginbyid(this.authService.Ids[0].value);
  }
  disable:boolean=false;
  checkverify(ev:any){
this.authService.checkVerify(ev.target.value);
setTimeout(() => {
if(this.authService.loginbyid.verify_Code==0){
this.disable=true;
}
}, 30000);
  }
}
