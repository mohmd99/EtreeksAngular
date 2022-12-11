import { AdminService } from './../../Services/admin.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog}from '@angular/material/dialog';




@Component({
  selector: 'app-manage-contact-info',
  templateUrl: './manage-contact-info.component.html',
  styleUrls: ['../admin-panel/admin-panel.component.css']
})
export class ManageContactInfoComponent implements OnInit {

  @ViewChild('CreateDialoug') callCreate!:TemplateRef<any>;
  @ViewChild('callUpdatDailog') callUpdate!:TemplateRef<any>
  @ViewChild('callDeleteDailog') callDelete!:TemplateRef<any>
  @ViewChild('callLocationDailog') callLocation!:TemplateRef<any>


   unvisible=false;

    createForm:FormGroup=new FormGroup
    ({
      phone_Number:new FormControl('',Validators.required),
      location:new FormControl(),
      website_Name:new FormControl('',Validators.required),
      email:new FormControl()

    });

  

    constructor(public adminService:AdminService ,public generalService:GeneralService,public dialog:MatDialog) { }

    ngOnInit(): void {
      this.generalService.getContactInfo();
     
    }

    

    

    OpenCreateDialouge()
    {
      

      this.dialog.open(this.callCreate);

      //console.log(this.createForm.value)

    }

    SaveData(){


    //  this.createForm.controls['cat_Id'].value:Number;
      console.log(this.createForm.value);
      this.adminService.createContactInfo(this.createForm.value);
     


      // this.router.navigate(['AllCourses']);

    }

    p_data:any={};
    updateForm:FormGroup=new FormGroup
    ({id:new FormControl(),
      phone_Number:new FormControl('',Validators.required),
      location:new FormControl(),
      website_Name:new FormControl('',Validators.required),
      email:new FormControl()

    });


    openUpdateDailog(obj:any){




      this.p_data={
        id:obj.id,
        phone_Number:obj.phone_Number,
        location:obj.location,
        email:obj.email,
        website_Name:obj.website_Name,

      }


      this.updateForm.controls['id'].setValue(this.p_data.id);
      this.updateForm.controls['phone_Number'].setValue(this.p_data.phone_Number);
      this.updateForm.controls['location'].setValue(this.p_data.location);
      this.updateForm.controls['email'].setValue(this.p_data.email);
      this.updateForm.controls['website_Name'].setValue(this.p_data.website_Name);

      this.dialog.open(this.callUpdate);

      console.log(obj);
    }
    updateData(){
      console.log(this.updateForm.value);
      this.adminService.updateContactInfo(this.updateForm.value);


    }
    openDeleteDailog(id:number){
      const dialogRef=  this.dialog.open(this.callDelete);
      dialogRef.afterClosed().subscribe((result)=>{
        if(result!=undefined)
        {
          if(result=='yes')
          {
            console.log(id);


            this.adminService.deleteContactInfo(id);
          }

            else if(result=='no')
            console.log('thank you ');

        }
      })
    }


    OpenLocationDialog(){

      this.dialog.open(this.callLocation);
    }
    // maps

display : any;
center: google.maps.LatLngLiteral = {lat: 31.9539, lng: 35.9106};
zoom = 10;
markerOptions: google.maps.MarkerOptions = {draggable: false};

//temp value
markerPosition: google.maps.LatLngLiteral={lat: 31.9539, lng: 35.9106} ;

// select(event: google.maps.MapMouseEvent) {
//   if(event.latLng != null)
//   this.display = event.latLng.toJSON();
// }
selectedPosition:any
addMarker(event: google.maps.MapMouseEvent) {
  if(event.latLng != null)
  this.markerPosition=event.latLng.toJSON();
  this.selectedPosition= JSON.stringify(this.markerPosition);
}

ConfirmLocation(){

  this.updateForm.controls['location'].setValue(this.selectedPosition);
  this.createForm.controls['location'].setValue(this.selectedPosition);
  console.log(this.updateForm.controls['location'].value);

}
}
