import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgPrgLogoComponent } from './arg-prg-logo.component';

describe('ArgPrgLogoComponent', () => {
  let component: ArgPrgLogoComponent;
  let fixture: ComponentFixture<ArgPrgLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgPrgLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgPrgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
