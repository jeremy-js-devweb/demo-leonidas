import {Route} from '@angular/router';
import {DialogsComponent} from "./dialogs/dialogs.component";

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DialogsComponent
  }
];
