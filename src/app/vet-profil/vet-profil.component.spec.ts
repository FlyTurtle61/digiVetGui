import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetProfilComponent } from './vet-profil.component';

describe('VetProfilComponent', () => {
  let component: VetProfilComponent;
  let fixture: ComponentFixture<VetProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
