import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.toastr.success('hello');
    this.spinner.show();
    setTimeout(() => {

      this.spinner.hide();
      }, 3000);

  }

}
