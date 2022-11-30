import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStudentComponent } from './category-student.component';

describe('CategoryStudentComponent', () => {
  let component: CategoryStudentComponent;
  let fixture: ComponentFixture<CategoryStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
