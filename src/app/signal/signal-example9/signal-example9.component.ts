import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputSignalComponent } from './input-signal-title.component';

@Component({
  selector: 'app-signal-example9',
  standalone: true,
  templateUrl: './signal-example9.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, InputSignalComponent],
})
export default class SignalExample9Component {
  searchInput = signal('');

  searchProduct(searchText: string): void {
    this.searchInput.set(searchText);
  }
}
