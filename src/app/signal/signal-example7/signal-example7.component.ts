import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {filter, interval, take} from 'rxjs';

@Component({
  selector: 'app-signal-example7',
  standalone: true,
  templateUrl: './signal-example7.component.html',
  styleUrl: './signal-example7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample5Component {
  counter$ = interval(1000);
  counter = toSignal(this.counter$);

  counter2$ = interval(1000).pipe();
  counterWithIntialValue = toSignal(this.counter2$, { initialValue: 10 });

  counter3$ = interval(1000).pipe(take(6));
  counterUpto5 = toSignal(this.counter3$);
}
