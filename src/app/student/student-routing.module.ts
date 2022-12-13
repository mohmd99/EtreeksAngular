import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutStudentComponent } from './about-student/about-student.component';
import { AllcourseStudentComponent } from './allcourse-student/allcourse-student.component';
import { CategoryStudentComponent } from './category-student/category-student.component';
import { ContactStudentComponent } from './contact-student/contact-student.component';
import { CourseStudentComponent } from './course-student/course-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [{
  path:'home',
  component:HomeStudentComponent
},
{
  path:'course',
  component:AllcourseStudentComponent
},
{
  path:'category',
  component:CategoryStudentComponent
},
{
  path:'about',
  component:AboutStudentComponent
},
{
  path:'contact',
  component:ContactStudentComponent
},
{
  path:'profile',
  component:ProfileStudentComponent
},{
  path:'reservation',component:ReservationComponent
},{
  path:'testimonial',component:TestimonialComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
