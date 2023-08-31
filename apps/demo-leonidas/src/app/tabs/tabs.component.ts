import {Component} from '@angular/core';
import {
  BrnTabsComponent,
  BrnTabsContentDirective,
  BrnTabsListComponent,
  BrnTabsTriggerDirective
} from '@spartan-ng/ui-tabs-brain';
import {HlmTabsContentDirective, HlmTabsListDirective, HlmTabsTriggerDirective} from '@spartan-ng/tabs-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from '@spartan-ng/card-helm';
import {HlmLabelDirective} from '@spartan-ng/label-helm';
import {HlmInputDirective} from '@spartan-ng/input-helm';
import {HlmButtonDirective} from '@spartan-ng/button-helm';
import {HlmBadgeDirective} from '@spartan-ng/badge-helm';

@Component({
  selector: 'demo-leonidas-tabs',
  standalone: true,
  imports: [
    BrnTabsComponent,
    BrnTabsListComponent,
    BrnTabsTriggerDirective,
    BrnTabsContentDirective,

    HlmTabsListDirective,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,

    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    HlmBadgeDirective,
  ],
  template: `
      <brn-tabs class='block max-w-3xl mx-auto' value='account'>
          <brn-tabs-list hlmTabsList class='grid w-full grid-cols-2' aria-label='tabs example'>
              <button hlmTabsTrigger brnTabsTrigger='account'>Account</button>
              <button hlmTabsTrigger brnTabsTrigger='password'>Password</button>
          </brn-tabs-list>
          <div hlmTabsContent brnTabsContent='account'>
              <section hlmCard>
                  <div hlmCardHeader>
                      <h3 hlmCardTitle>Account</h3>
                      <p hlmCardDescription>
                          Make changes to your account here. Click save when you're done.
                      </p>
                  </div>
                  <p hlmCardContent>
                      <label class='block my-4' hlmLabel>Name
                          <input class='w-full mt-1.5' value='Pedro Duarte' hlmInput>
                      </label>
                      <label class='block my-4' hlmLabel>Username
                          <input class='w-full mt-1.5' placeholder='@peduarte' hlmInput>
                      </label>
                  </p>
                  <div hlmCardFooter>
                      <button hlmBtn>Save Changes</button>
                  </div>
              </section>
          </div>
          <div hlmTabsContent brnTabsContent='password'>
              <section hlmCard>
                  <div hlmCardHeader>
                      <h3 hlmCardTitle>Password</h3>
                      <p hlmCardDescription>
                          Change your password here. After saving, you'll be logged out.
                      </p>
                  </div>
                  <p hlmCardContent>
                      <label class='block my-4' hlmLabel>Old Password
                          <input class='w-full mt-1.5' type='password' hlmInput>
                      </label>
                      <label class='block my-4' hlmLabel>New Password
                          <input class='w-full mt-1.5' type='password' hlmInput>
                      </label>
                  </p>
                  <div hlmCardFooter>
                      <button hlmBtn>Save Password</button>
                  </div>
              </section>
          </div>
      </brn-tabs>
  `,
})

export class TabsComponent {
}
