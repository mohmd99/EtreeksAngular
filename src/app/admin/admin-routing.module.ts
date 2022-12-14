import { ManageTrainerComponent } from './manage-trainer/manage-trainer.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { AboutComponent } from './../about/about.component';
import { MessageComponent } from './message/message.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';
import { ManageContactInfoComponent } from './manage-contact-info/manage-contact-info.component';

const routes: Routes = [
  {path:"",component:AdminPanelComponent},{
    path:"AllCourses",component:ManageCoursesComponent
  },{
    path:"category",component:ManageCategoryComponent
  },{
    path:"home",component:ManageHomeComponent
  },{
    path:"message",component:MessageComponent
  },{
    path:"about",component:ManageAboutComponent
  },{
    path:"testimonial",component:ManageTestimonialComponent
  },{
    path:"user", component:ManageUserComponent
  },{
    path:"profile",component:ManageProfileComponent
  },{
    path:"trainer",
    component:ManageTrainerComponent
  },{
    path:"ContactInfo",
    component:ManageContactInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
