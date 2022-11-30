import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcourseStudentComponent } from './allcourse-student.component';

describe('AllcourseStudentComponent', () => {
  let component: AllcourseStudentComponent;
  let fixture: ComponentFixture<AllcourseStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcourseStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcourseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
