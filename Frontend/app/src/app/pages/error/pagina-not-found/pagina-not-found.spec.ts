import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNotFound } from './pagina-not-found';

describe('PaginaNotFound', () => {
  let component: PaginaNotFound;
  let fixture: ComponentFixture<PaginaNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
