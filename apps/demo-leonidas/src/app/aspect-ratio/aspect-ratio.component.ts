import { Component } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/aspectratio-helm';

@Component({
  selector: 'demo-leonidas-aspect-ratio',
  standalone: true,
  imports: [HlmAspectRatioDirective],
  template: `
      <div class="w-[500px]">
          <div class="overflow-hidden rounded-xl drop-shadow max-w-xl">
              <div [hlmAspectRatio]="16 / 9">
                  <img alt="Mountain views" src="https://www.spartan.ng/assets/mountains.jpg"/>
              </div>
          </div>
      </div>
  `,
})
export class AspectRatioComponent {}
