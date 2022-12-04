import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-verify',
  templateUrl: './check-verify.component.html',
  styleUrls: ['./check-verify.component.css']
})
export class CheckVerifyComponent implements OnInit {

  constructor(private authService:AuthService) { }
 disable:boolean=false;
  ngOnInit(): void {
    this.authService.getloginbyid(this.authService.Ids[0].value);
    setTimeout(() => {
      if(this.authService.loginbyid.verify_Code==0){
      this.disable=true;
      }
      }, 35000);
  }

  checkverify(ev:any){
this.authService.checkVerify(ev.target.value,this.authService.Ids[0].value);

  }
}
