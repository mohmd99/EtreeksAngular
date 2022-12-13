import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCoursePageComponent } from './guest-course-page.component';

describe('GuestCoursePageComponent', () => {
  let component: GuestCoursePageComponent;
  let fixture: ComponentFixture<GuestCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCoursePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
