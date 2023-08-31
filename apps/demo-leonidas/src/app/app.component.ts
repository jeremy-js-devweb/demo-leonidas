import {Component} from '@angular/core';
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

@Component({
  standalone: true,
  imports: [RouterModule, AspectRatioComponent, HlmBadgeDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmCardFooterDirective,
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

    </div>
  `
})
export class AppComponent {
  title = 'demo-leonidas';
}
