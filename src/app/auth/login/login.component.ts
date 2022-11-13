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

  ngOnInit(): void {
    this.rememberMe = false;

  }
  onSubmit() {



  //     localStorage.setItem('email', this.email);
  //     localStorage.setItem('password',  this.password);
  //     // Save value to local storage
  //     if(this.rememberMe) {
  //       localStorage.setItem('rememberMe', 'yes')
  //     }
  //     this.toastrService.success('Successfully Login!');
  //     this.router.navigate(['/home']);
  //   },
  //   (err) => {

  //   });
  // }

}
}
