import { ChangeDetectionStrategy, Component, effect, signal, untracked } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'signal-example10',
  standalone: true,
  templateUrl: `./signal-example10.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule]
})
export default class SignalExample10Component {
  counter1 = signal(1);
  counter2 = signal(1);

  counterUpdate$ = effect(() => {
    console.log(this.counter1(), untracked(() => this.counter2()));
  });
  construct () {
    effect(() => {

    });
    effect(() => {

    }, {
      allowSignalWrites: true
    });
  }

  updateCounter1(){
    this.counter1.update(() => this.counter1() + 1)
  }

  updateCounter2(){
    this.counter2.update(() => this.counter2() + 1)
  }

}
