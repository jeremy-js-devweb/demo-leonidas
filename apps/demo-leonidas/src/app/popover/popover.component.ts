import {Component} from '@angular/core';
import {HlmButtonDirective} from '@spartan-ng/button-helm';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import {HlmPopoverCloseDirective, HlmPopoverContentDirective} from '@spartan-ng/popover-helm';
import {HlmLabelDirective} from '@spartan-ng/label-helm';
import {HlmInputDirective} from '@spartan-ng/input-helm';

@Component({
  selector: 'demo-leonidas-popover',
  standalone: true,
  imports: [
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    HlmButtonDirective,
    HlmLabelDirective,
    HlmInputDirective,
  ],
  template: `
    <brn-popover sideOffset="5" closeDelay="100">
      <button id="edit-profile" variant="outline" brnPopoverTrigger hlmBtn>Open Popover</button>
      <div hlmPopoverContent class="w-80 grid gap-4" *brnPopoverContent="let ctx">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <label hlmLabel for="width">Width</label>
            <input hlmInput id="width" [defaultValue]="'100%'" class="col-span-2 h-8"/>
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label hlmLabel for="maxWidth">Max. width</label>
            <input hlmInput id="maxWidth" [defaultValue]="'300px'" class="col-span-2 h-8"/>
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label hlmLabel for="height">Height</label>
            <input hlmInput id="height" [defaultValue]="'25px'" class="col-span-2 h-8"/>
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label hlmLabel for="maxHeight">Max. height</label>
            <input hlmInput id="maxHeight" [defaultValue]="'none'" class="col-span-2 h-8"/>
          </div>
        </div>
      </div>
    </brn-popover>
  `,
})
export class PopoverComponent {
}
