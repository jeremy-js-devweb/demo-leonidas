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
import {SheetComponent} from "./sheet/sheet.component";

import { HlmSkeletonComponent } from '@spartan-ng/skeleton-helm';
import {TabsComponent} from "./tabs/tabs.component";

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
    NgFor, HlmSeparatorDirective, HlmScrollAreaComponent, SheetComponent,
    HlmSkeletonComponent, TabsComponent
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

          <demo-leonidas-sheet/>

          <div class='p-4 m-4 w-fit flex items-center space-x-4'>
              <hlm-skeleton class='h-12 w-12 rounded-full'/>
              <div class='space-y-2'>
                  <hlm-skeleton class='h-4 w-[250px]'/>
                  <hlm-skeleton class='h-4 w-[200px]'/>
              </div>
          </div>

          <demo-leonidas-tabs/>


          <textarea class="min-h-[80px] w-[300px]" hlmInput placeholder="Type your message here."></textarea>


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
