import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example8',
  standalone: true,
  templateUrl: './signal-example8.component.html',
  styleUrl: './signal-example8.component.scss',
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample8Component {
  count = signal(1000);

  constructor() {
    effect(() => {
      console.log(this.count())
      if (this.count() === 1005) {
        alert('hello world!')
      }
    })
  }


  updateCount() {
    this.count.update((count) => count + 1);
  }
}
