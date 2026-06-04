import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProfesional } from './detalle-profesional';

describe('DetalleProfesional', () => {
  let component: DetalleProfesional;
  let fixture: ComponentFixture<DetalleProfesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProfesional],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProfesional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
