import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
coursesinfo:any=[{}];
allcontactus:any=[{}];
allTestimonial:any=[{}];
display_image:any;

  constructor( private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient) { }

  getcoursewithcategory(){
    this.spinner.show();
    this.http.get("https://localhost:44343/api/course/getcoursewithcategory").subscribe((res:any)=>{
      this.coursesinfo=res;
      this.spinner.hide();
      console.log(res);

      this.toaster.success("retreived");

    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message,err.status);
    });
  }



  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44343/api/course/uploadImage', file).subscribe((resp: any) => {
      this.display_image = resp.image;
    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }





  createCourse(body: any) {
    body.image = this.display_image;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDcourse', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }
  updateCourse(body:any)
  {
    if(this.display_image !=null)
     body.image = this.display_image;

    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDcourse',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  deleteCourse(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44343/api/CRUDcourse/Delete/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toaster.success('Deleted Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  display_image_category:any
  createCategory(body: any) {
    body.image = this.display_image_category;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDcategory', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  updateCategory(body:any)
  {
    if(this.display_image_category !=null)
     body.image = this.display_image_category;

    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDcategory',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  deleteCategory(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44343/api/CRUDcategory/Delete/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toaster.success('Deleted Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  display_image_home:any
  uploadAttachmentHome(file: FormData) {
    this.http.post('https://localhost:44343/api/home/uploadImage', file).subscribe((resp: any) => {
      this.display_image_home = resp.image;
      console.log(this.display_image_category);

    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }
  createHome(body: any) {
    body.image = this.display_image_home;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDhome', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  updateHome(body:any)
  {
    if(this.display_image_home !=null)
     body.image = this.display_image_home;

    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDhome',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  deletehome(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44343/api/CRUDhome/Delete/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toaster.success('Deleted Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  uploadAttachmentCategory(file: FormData) {
    this.http.post('https://localhost:44343/api/Category/uploadImage', file).subscribe((resp: any) => {
      this.display_image_category = resp.image;
      console.log(this.display_image_category);

    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }
  createContactus(body: any) {

    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDcontactus', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  updateContactus(body:any)
  {


    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDcontactus',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  deleteContactus(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44343/api/CRUDcontactus/Delete/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toaster.success('Deleted Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  getcontactus(){
    this.spinner.show();
    debugger
    this.http.get('https://localhost:44343/api/CRUDcontactus').subscribe((resp) => {
      console.log(resp);
      this.allcontactus=resp
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  display_image_about:any
  uploadAttachmentAbout(file: FormData) {
    this.http.post('https://localhost:44343/api/about/uploadImage', file).subscribe((resp: any) => {
      this.display_image_about = resp.image;
      console.log(this.display_image_category);

    }, err => {
      this.toaster.error('Can not Upload Image');
      console.log(err);
    })
  }
  createAbout(body: any) {
    body.image = this.display_image_about;
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44343/api/CRUDabout', body).subscribe((resp) => {
      console.log(resp);
      this.spinner.hide();
      this.toaster.success('Created !!');
    }, err => {
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    }
    )
  }

  updateabout(body:any)
  {
    if(this.display_image_about !=null)
     body.image = this.display_image_about;

    this.spinner.show();
    this.http.put('https://localhost:44343/api/CRUDabout',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toaster.success('Updated Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }
  deleteabout(id:number)
  {
    this.spinner.show();

    this.http.delete('https://localhost:44343/api/CRUDabout/Delete/'+id).subscribe((resp)=>{
      this.spinner.hide();
        this.toaster.success('Deleted Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toaster.error(err.message, err.status);
    })
  }






getTestimonial(){
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44343/api/Testimonial/GetAllTistimonialUser').subscribe((resp) => {
    console.log(resp);
    this.allTestimonial=resp
    this.spinner.hide();

  }, err => {
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  }
  )
}
updateTestimonial(body:any){


 this.spinner.show();
 this.http.put('https://localhost:44343/api/CRUDtestimonial',body).subscribe((resp)=>{
   this.spinner.hide();
   this.toaster.success('Updated Successfully !!');
 },err=>{
   this.spinner.hide();
   this.toaster.error(err.message, err.status);
 })
}


//---------------User----------------
AllUser:any=[{}]
display_image_user:any;


updateUser(body:any)
{
  if(this.display_image_user !=null)
  body.image = this.display_image_user;

  this.spinner.show();
  this.http.put('https://localhost:44343/api/CRUDuser',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toaster.success('Updated Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })
}
deleteUser(id:number)
{
  this.spinner.show();

  this.http.delete('https://localhost:44343/api/CRUDuser/Delete/'+id).subscribe((resp)=>{
    this.spinner.hide();
      this.toaster.success('Deleted Successfully !!');
  },err=>{
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  })
}
getUser(){


  this.http.get('https://localhost:44343/api/CRUDuser').subscribe((resp) => {
    console.log(resp);
    this.AllUser=resp
    this.spinner.hide();

  }, err => {
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  }
  )
}
userbyid:any={}
loginuserbyid:any={}
Colors:any[]=[
  "#8B7E74",
"#344D67",
"#8B7E74",
"#C7BCA1",
"#497174",
"#3A8891",
"#6D9886",
"#8D9EFF",
"#9BA17B",
"#5DA7DB",
"#9E7676",
"#98A8F8",
"#251B37",
"#1C6758",
"#704F4F",
"#FF731D",
"#AC4425",
"#A10035",
"#D1512D",
"#18978F",
"#B20600",
"#00092C",
"#D9534F",
"#8A8635",
"#630000",
"#334756",
"#6C4A4A",
"#105652",
"#694E4E"
  ]
  
  color:any="";
getuserbyid(id:number){
  this.http.get('https://localhost:44343/api/CRUDuser/Getbyid/'+id).subscribe((resp) => {
    console.log(resp);
    this.userbyid=resp

    this.color=this.Colors[this.userbyid.last_Name.toUpperCase().charCodeAt(0)-65]
    console.log(this.color);

    this.spinner.hide();

  }, err => {
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  }
  )
}

uploadAttachmentuser(file: FormData) {
  this.http.post('https://localhost:44343/api/user/uploadImage', file).subscribe((resp: any) => {
    this.display_image_user = resp.image;
    console.log(this.display_image_category);

  }, err => {
    this.toaster.error('Can not Upload Image');
    console.log(err);
  })
}
SearchUser(body:string){

  this.http.get('https://localhost:44343/api/user/Search/'+body).subscribe((res:any)=>{
    this.AllUser=res

  },err=>{
    this.toaster.error('Can not Search');
    console.log(err);
  })
}
SearchCourse(body:string){

  this.http.get('https://localhost:44343/api/Course/Search/'+body).subscribe((res:any)=>{
    this.coursesinfo=res

  },err=>{
    this.toaster.error('Can not Search');
    console.log(err);
  })
}


getloginuserbyid(id:number){
  this.http.get('https://localhost:44343/api/CRUDuser/Getbyid/'+id).subscribe((resp) => {
    console.log(resp);
    this.loginuserbyid=resp

    this.color=this.Colors[this.userbyid.last_Name.toUpperCase().charCodeAt(0)-65]
    console.log(this.color);

    this.spinner.hide();

  }, err => {
    this.spinner.hide();
    this.toaster.error(err.message, err.status);
  }
  )
}
}
