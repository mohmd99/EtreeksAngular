import { ProfileComponent } from './profile/profile.component';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { CategoryComponent } from './category/category.component';
import { AdminModule } from './admin/admin.module';
import { AuthorizationGuard } from './authorization.guard';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { SharedModule } from './shared/shared.module';
import { GooglemapComponent } from './Maps/googlemap/googlemap.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GuestCoursePageComponent } from './guest-course-page/guest-course-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'Category',
    component:CategoryComponent
  },

  {
    path:'Course',
    component:CoursePageComponent
  },
  

  {
    path:'auth',
    loadChildren:()=>AuthModule
  }
  ,

  {
    path:'admin',
    loadChildren:()=>AdminModule,
    canActivate:[AuthorizationGuard]
  },
  

  {
    path:'ourCourses',
    component:GuestCoursePageComponent
  },

  {
    path:'teacher',
    loadChildren:()=>TeacherModule,
    canActivate:[AuthorizationGuard]
    
  },
  {
    path:'student',
    loadChildren:()=>StudentModule,
    canActivate:[AuthorizationGuard]
  },

  {
    path:'Maps',
    component:GooglemapComponent
  },

  {
    path:'Testimonial',
    component:TestimonialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
