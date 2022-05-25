import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetSourceClinicComponent } from './vet-source-clinic.component';

describe('VetSourceClinicComponent', () => {
  let component: VetSourceClinicComponent;
  let fixture: ComponentFixture<VetSourceClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetSourceClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetSourceClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
