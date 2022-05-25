import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSourceClinicComponent } from './user-source-clinic.component';

describe('UserSourceClinicComponent', () => {
  let component: UserSourceClinicComponent;
  let fixture: ComponentFixture<UserSourceClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSourceClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSourceClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
