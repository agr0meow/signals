import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserComponent} from "./components/user.component";

@Component({
  selector: 'app-signal-example13',
  standalone: true,
  imports: [
    UserComponent
  ],
  templateUrl: './signal-example13.component.html',
  styleUrl: './signal-example13.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample13Component {
  showUser = false;

}
