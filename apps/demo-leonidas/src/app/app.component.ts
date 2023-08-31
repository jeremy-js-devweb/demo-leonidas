import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'demo-leonidas-root',
  template: `
      <div class="flex flex-col items-center gap-y-3">
          <h1>TEST SPARTAN UI</h1>
          <router-outlet></router-outlet>
      </div>
  `
})
export class AppComponent {
  title = 'demo-leonidas';
}
