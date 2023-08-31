import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/alert-helm';
import {HlmIconComponent} from '@spartan-ng/icon-helm';
import {provideIcons} from '@ng-icons/core';
import {radixChevronRight, radixCube} from '@ng-icons/radix-icons';
import {HlmButtonDirective} from "@spartan-ng/button-helm";


@Component({
  selector: 'demo-leonidas-dialogs',
  standalone: true,
  imports: [
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconComponent,
    HlmButtonDirective
  ],
  providers: [provideIcons({radixCube, radixChevronRight})],
  template: `
    <div hlmAlert>
      <hlm-icon hlmAlertIcon name="radixCube"/>
      <h4 hlmAlertTitle>Introducing spartan/ui!</h4>
      <p hlmAlertDesc>
        spartan/ui is made up of unstyled UI providers, the spartan/ui/brain.<br/>
        On top we add spartan/ui/helm(et) with shadcn-like styles.
      </p>
    </div>

    <section>
      <button hlmBtn size="icon" variant="outline">
        <hlm-icon size='sm' name="radixChevronRight"/>
      </button>

      <button hlmBtn>Base</button>
      <button hlmBtn variant='outline'>Outline</button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent {

}
