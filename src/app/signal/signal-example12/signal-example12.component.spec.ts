import { TestBed } from '@angular/core/testing';
import SignalExample12Component from './signal-example12.component';

describe('Example 15', () => {
  let component: SignalExample12Component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExample12Component],
    }).compileComponents();

    component = TestBed.createComponent(
      SignalExample12Component
    ).componentInstance;
  });

  it('Example 15 component Intialized', () => {
    expect(component).toBeTruthy();
  });
});
