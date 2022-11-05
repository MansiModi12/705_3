import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormmComponent } from './input-formm.component';

describe('InputFormmComponent', () => {
  let component: InputFormmComponent;
  let fixture: ComponentFixture<InputFormmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
