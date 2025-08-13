import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersongemComponent } from './persongem';

describe('Persongem', () => {
  let component: PersongemComponent;
  let fixture: ComponentFixture<PersongemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersongemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersongemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
