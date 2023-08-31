import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AspectRatioComponent} from "./aspect-ratio/aspect-ratio.component";

@Component({
  standalone: true,
  imports: [RouterModule, AspectRatioComponent],
  selector: 'demo-leonidas-root',
  template: `
    <div class="flex flex-col items-center gap-y-3">
      <h1>TEST SPARTAN UI</h1>
      <router-outlet></router-outlet>
      <demo-leonidas-aspect-ratio/>
    </div>
  `
})
export class AppComponent {
  title = 'demo-leonidas';
}
