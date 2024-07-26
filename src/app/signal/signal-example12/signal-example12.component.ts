import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'signal-example12',
  standalone: true,
  templateUrl: `./signal-example12.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatProgressSpinnerModule, NgIf],
  styles: [
    `
      button.loading {
        background: #f14e4e;
      }
      .loader-area{
        margin-top: 20px;
      }
    `,
  ],
})
export default class SignalExample12Component {
  loading = signal(false);
  toggleLoader() {
    this.loading.update((state) => !state);
  }
}
