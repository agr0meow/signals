import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-example14',
  standalone: true,
  imports: [],
  template: `
    <h2>major error to create computed signals</h2>

    <h3>Counter value {{counter()}}</h3>

    <h3>Derived counter: {{derivedCounter()}}</h3>

    <button (click)="increment()">Increment</button>

    <button (click)="multiplier = 10">
      Set multiplier to 10
    </button>
  `,
  styles: ``
})
export default class SignalExample14Component {
  counter = signal(0);

  multiplier: number = 0;

  derivedCounter = computed(() => {

    if (this.counter() == 0) {
      return 0
    }
    else {
      return this.counter() * this.multiplier;
    }
  })

  increment() {
    console.log(`Updating counter...`)
    this.counter.set(this.counter() + 1);

  }
}
