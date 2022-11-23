import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private toastr :ToastrService , private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    const token = localStorage.getItem('token');
    if(token)  
    {
      if(state.url.indexOf('admin')>=0)
      {
        let user:any = localStorage.getItem('user');
        if(user)
        {
          user = JSON.parse(user);
          if(user.Roleid =='1')
          {
            this.toastr.success('Welcome Admin');
            return true;
          }
        
        else {
          this.toastr.warning('Sorry , this page for teacher');
          this.router.navigate(['auth/login']);
          localStorage.clear();
          return false;
        }
        
      }
      else{
        this.toastr.warning('Sorry , this page for teacher');
        this.router.navigate(['contact']);
        return false;
      }
    }
    return true;
    }
      else
      {
        this.router.navigate(['auth/login']);
        this.toastr.warning('Please Login');
        return false;
      }
  }
  
}