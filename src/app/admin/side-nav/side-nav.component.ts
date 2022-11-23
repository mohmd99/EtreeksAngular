import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class SideNavComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
