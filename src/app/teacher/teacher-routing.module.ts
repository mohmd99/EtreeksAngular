import { ReservationComponent } from './reservation/reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { ContactTeacherComponent } from './contact-teacher/contact-teacher.component';
import { HomeComponent } from './home/home.component';
import { ManageAvailableTimeComponent } from './manage-available-time/manage-available-time.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { SelectCourseComponent } from './select-course/select-course.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'updateprofile',
  component:ProfileTeacherComponent
},
{
  path:'contact',
  component:ContactTeacherComponent
},
{
  path:'about',
  component:AboutTeacherComponent
},
{
  path:'AvailableTime',
  component:ManageAvailableTimeComponent
},
{
  path:'Courses',
  component:SelectCourseComponent
},{
  path:'reservation',
  component:ReservationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
