import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CoursesComponent } from './courses/courses.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CategoryComponent } from './category/category.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from 'src/Interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CoursePageComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule,
    NgxSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  exports:[],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
