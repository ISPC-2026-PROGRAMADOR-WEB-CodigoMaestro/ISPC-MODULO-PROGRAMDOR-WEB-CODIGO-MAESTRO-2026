import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEstandar } from './dashboard-estandar';

describe('DashboardEstandar', () => {
  let component: DashboardEstandar;
  let fixture: ComponentFixture<DashboardEstandar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEstandar],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardEstandar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
