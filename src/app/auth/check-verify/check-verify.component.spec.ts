import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVerifyComponent } from './check-verify.component';

describe('CheckVerifyComponent', () => {
  let component: CheckVerifyComponent;
  let fixture: ComponentFixture<CheckVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
