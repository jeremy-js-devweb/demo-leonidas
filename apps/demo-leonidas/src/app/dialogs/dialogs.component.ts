import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/button-helm';


@Component({
  selector: 'demo-leonidas-dialogs',
  standalone: true,
  imports: [HlmButtonDirective],
  template: `
    <button hlmBtn>Button</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent {
}
