import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVerifyComponent } from './select-verify.component';

describe('SelectVerifyComponent', () => {
  let component: SelectVerifyComponent;
  let fixture: ComponentFixture<SelectVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
