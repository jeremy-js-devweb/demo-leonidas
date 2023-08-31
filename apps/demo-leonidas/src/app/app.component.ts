import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AspectRatioComponent} from "./aspect-ratio/aspect-ratio.component";
import { HlmBadgeDirective } from '@spartan-ng/badge-helm';


@Component({
  standalone: true,
  imports: [RouterModule, AspectRatioComponent, HlmBadgeDirective],
  selector: 'demo-leonidas-root',
  template: `
    <div class="flex flex-col items-center gap-y-3">
      <h1>TEST SPARTAN UI</h1>
      <router-outlet></router-outlet>
      <demo-leonidas-aspect-ratio/>



      <a target="_blank" href="https://github.com/goetzrobin/spartan" hlmBadge>This is madness. This is spartan.</a>

    </div>
  `
})
export class AppComponent {
  title = 'demo-leonidas';
}
