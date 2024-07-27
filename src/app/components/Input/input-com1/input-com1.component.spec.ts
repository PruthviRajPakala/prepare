import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCom1Component } from './input-com1.component';

describe('InputCom1Component', () => {
  let component: InputCom1Component;
  let fixture: ComponentFixture<InputCom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCom1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
