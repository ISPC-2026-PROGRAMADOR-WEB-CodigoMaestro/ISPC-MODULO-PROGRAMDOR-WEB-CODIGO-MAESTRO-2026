import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEstandar } from './nav-estandar';

describe('NavEstandar', () => {
  let component: NavEstandar;
  let fixture: ComponentFixture<NavEstandar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavEstandar],
    }).compileComponents();

    fixture = TestBed.createComponent(NavEstandar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
