import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalExample14Component } from './signal-example14.component';

describe('SignalExample14Component', () => {
  let component: SignalExample14Component;
  let fixture: ComponentFixture<SignalExample14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalExample14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalExample14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
