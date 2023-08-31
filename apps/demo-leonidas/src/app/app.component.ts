import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AspectRatioComponent} from "./aspect-ratio/aspect-ratio.component";
import {HlmBadgeDirective} from '@spartan-ng/badge-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/card-helm';
import {MenuComponent} from "./menu/menu.component";
import {HlmInputDirective} from '@spartan-ng/input-helm';
import {HlmLabelDirective} from '@spartan-ng/label-helm';
import {PopoverComponent} from "./popover/popover.component";
import {BrnProgressComponent, BrnProgressIndicatorComponent,} from '@spartan-ng/ui-progress-brain';
import {HlmProgressDirective, HlmProgressIndicatorDirective} from '@spartan-ng/progress-helm';

import { NgFor } from '@angular/common';
import { HlmScrollAreaComponent } from '@spartan-ng/scrollarea-helm';
import { HlmSeparatorDirective } from '@spartan-ng/separator-helm';

@Component({
  standalone: true,
  imports: [RouterModule, AspectRatioComponent, HlmBadgeDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective, MenuComponent,
    HlmInputDirective,
    HlmLabelDirective, PopoverComponent,
    BrnProgressComponent, BrnProgressIndicatorComponent, HlmProgressIndicatorDirective, HlmProgressDirective,
    NgFor, HlmSeparatorDirective, HlmScrollAreaComponent
  ],
  selector: 'demo-leonidas-root',
  template: `
      <div class="flex flex-col items-center gap-y-3">
          <h1>TEST SPARTAN UI</h1>
          <router-outlet></router-outlet>
          <demo-leonidas-aspect-ratio/>


          <a target="_blank" href="https://github.com/goetzrobin/spartan" hlmBadge>This is madness. This is spartan.</a>


          <section hlmCard>
              <div hlmCardHeader>
                  <h3 hlmCardTitle>Card Title</h3>
                  <p hlmCardDescription>Card Description</p>
              </div>
              <p hlmCardContent>Card Content</p>
              <p hlmCardFooter>Card Footer</p>
          </section>


          <demo-leonidas-dropdown-menu/>

          <!--      <input class="w-80" hlmInput placeholder='Email' type='email' />-->
          <label hlmLabel>E-Mail
              <input class='w-80' hlmInput type='email' placeholder='Email'/>
          </label>

          <demo-leonidas-popover/>

          <brn-progress hlm aria-labelledby='loading' class="w-72">
              <brn-progress-indicator hlm/>
          </brn-progress>

          <hlm-scroll-area class="h-72 w-48 rounded-md border border-border">
              <div class="p-4">
                  <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
                  <div class="text-sm" *ngFor="let tag of tags">
                      {{ tag }}
                      <div hlmSeparator class="my-2"></div>
                  </div>
              </div>
          </hlm-scroll-area>

      </div>
  `
})
export class AppComponent implements OnInit {
  title = 'demo-leonidas';

  value = 0;

  tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

  ngOnInit() {
    setTimeout(() => (this.value = 33), 3000);
  }
}
