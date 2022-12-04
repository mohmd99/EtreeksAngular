import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAvailableTimeComponent } from './manage-available-time.component';

describe('ManageAvailableTimeComponent', () => {
  let component: ManageAvailableTimeComponent;
  let fixture: ComponentFixture<ManageAvailableTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAvailableTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAvailableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
