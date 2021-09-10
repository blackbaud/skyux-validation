import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkyEmailValidationVisualComponent } from './visual/email-validation/email-validation-visual.component';
import { SkyUrlValidationDemoComponent } from './visual/url-validation/url-validation-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/visual'
  },
  {
    path: 'visual',
    component: VisualComponent
  },
  {
    path: 'visual/email-validation',
    component: SkyEmailValidationVisualComponent
  },
  {
    path: 'visual/url-validation',
    component: SkyUrlValidationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
