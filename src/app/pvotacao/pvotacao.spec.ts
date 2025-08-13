import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pvotacao } from './pvotacao';

describe('Pvotacao', () => {
  let component: Pvotacao;
  let fixture: ComponentFixture<Pvotacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pvotacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pvotacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
