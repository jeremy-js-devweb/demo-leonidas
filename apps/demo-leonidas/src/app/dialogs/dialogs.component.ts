import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from '@spartan-ng/alert-helm';
import {provideIcons} from '@ng-icons/core';
import {radixChevronRight, radixCube} from '@ng-icons/radix-icons';

import {
  BrnAlertDialogCloseDirective,
  BrnAlertDialogComponent,
  BrnAlertDialogContentDirective,
  BrnAlertDialogDescriptionDirective,
  BrnAlertDialogOverlayComponent,
  BrnAlertDialogTitleDirective,
  BrnAlertDialogTriggerDirective,
} from '@spartan-ng/ui-alertdialog-brain';
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogContentDirective,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/alertdialog-helm';
import {HlmButtonDirective} from '@spartan-ng/button-helm';
import {HlmIconComponent} from '@spartan-ng/icon-helm';


@Component({
  selector: 'demo-leonidas-dialogs',
  standalone: true,
  imports: [
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconComponent,
    HlmButtonDirective,


    BrnAlertDialogComponent,
    BrnAlertDialogOverlayComponent,
    BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,
    BrnAlertDialogCloseDirective,
    BrnAlertDialogTitleDirective,
    BrnAlertDialogDescriptionDirective,

    HlmAlertDialogOverlayDirective,
    HlmAlertDialogContentDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
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

    <brn-alert-dialog closeDelay="100">
      <brn-alert-dialog-overlay hlm/>
      <button id="edit-profile" variant="outline" brnAlertDialogTrigger hlmBtn>Delete Account</button>
      <div hlmAlertDialogContent *brnAlertDialogContent="let ctx">
        <hlm-alert-dialog-header>
          <h3 brnAlertDialogTitle hlm>Are you absolutely sure?</h3>
          <p brnAlertDialogDescription hlm>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </p>
        </hlm-alert-dialog-header>
        <hlm-alert-dialog-footer>
          <button hlmAlertDialogCancel (click)="ctx.close()">Cancel</button>
          <button hlmAlertDialogAction (click)="ctx.close()">Delete account</button>
        </hlm-alert-dialog-footer>
      </div>
    </brn-alert-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent {

}
