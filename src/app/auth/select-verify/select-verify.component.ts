import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-verify',
  templateUrl: './select-verify.component.html',
  styleUrls: ['./select-verify.component.css']
})
export class SelectVerifyComponent implements OnInit {
  
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  sendWithEmail(){
   
  
   
    
    if(this.authService.login_id!=null){
      this.authService.SendEmail(this.authService.login_id);
      setTimeout(() => {
        this.authService.DeleteCode(this.authService.login_id);
      }, 60000);
  
    }
    else{
    this.authService.SendEmail(this.authService.Ids[0].value);
    setTimeout(() => {
      this.authService.DeleteCode(this.authService.Ids[0].value);
    }, 60000);
  }
  }
  sendWithWhatsapp(){
    this.authService.SendWhatsapp(this.authService.Ids[0].value)
    setTimeout(() => {
      this.authService.DeleteCode(this.authService.Ids[0].value);
    }, 60000);
   
  }
}
