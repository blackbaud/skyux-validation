import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkyUrlValidationModule } from 'validation';
import { SkyEmailValidationVisualComponent } from './email-validation/email-validation-visual.component';
import { SkyUrlValidationDemoComponent } from './url-validation/url-validation-visual.component';
import { VisualComponent } from './visual.component';



@NgModule({
  declarations: [
    SkyEmailValidationVisualComponent,
    SkyUrlValidationDemoComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyUrlValidationModule
  ]
})
export class VisualModule { }
