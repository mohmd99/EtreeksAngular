import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  rememberMe:boolean=false;
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  data=new FormControl();
  ngOnInit(): void {
    this.rememberMe = false;
    this.AutoLogin();

  }
  Remember(ev:any){
    if(ev.target.checked){
      localStorage.setItem('email',String(this.email));
      localStorage.setItem('password',String(this.password));
    }
  } 
  AutoLogin(){
 this.email=new FormControl(localStorage.getItem('email'));
 
  this.password=new FormControl( localStorage.getItem('password'));  
  }

    
  /*{



      localStorage.setItem('email', this.email);
      localStorage.setItem('password',  this.password);
     // Save value to local storage
     if(this.rememberMe) {
        localStorage.setItem('rememberMe', 'yes')
      }
      this.toastrService.success('Successfully Login!');
      this.router.navigate(['/home']);
   },
    (err) => {

    });
   }*/

}

