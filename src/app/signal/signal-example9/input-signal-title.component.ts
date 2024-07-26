import {
  ChangeDetectionStrategy,
  Component, input,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'input-signal-title',
  standalone: true,
  template: ` <p>
    Username is : <b>{{ title() }}</b>
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSignalComponent {
  title = input.required({
    alias: 'title_header',
  } )
}
