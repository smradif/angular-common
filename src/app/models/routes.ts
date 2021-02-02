import { Route } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthGuardService } from '../guards/auth.guard';
import { RouteData } from ".";
import { HomeComponent } from '../modules/home/home.component';

export interface CustomRoute extends Route {
  data?: RouteData;
}

export const routes: CustomRoute[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Advanced Angular', tooltip: 'Home page' }
  },
  {
    path: 'dialogs',
    loadChildren: () => import('../modules/dialog/dialog.module').then(m => m.DialogModule),
    canActivate: [AuthGuardService],
    data: { title: 'Dialogs', preload: true, tooltip: 'Dialog page' }
  },
  {
    path: 'dynamic',
    loadChildren: () => import('../modules/dynamic/dynamic.module').then(m => m.DynamicModule),
    canActivate: [AuthGuardService],
    data: { title: 'Dynamic', preload: true, tooltip: 'Dynamic components page' }
  },
  {
    path: 'translation',
    loadChildren: () => import('../modules/translation/translation.module').then(m => m.TranslationModule),
    canActivate: [AuthGuardService],
    data: { title: 'Translation', preload: true, tooltip: 'Translation page' }
  },
  {
    path: 'wizard',
    loadChildren: () => import('../modules/wizard/wizard.-container.module').then(m => m.WizardContainerModule),
    canActivate: [AuthGuardService],
    data: { title: 'Wizard', preload: true, tooltip: 'Wizard page' }
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '/not-found' }
];
