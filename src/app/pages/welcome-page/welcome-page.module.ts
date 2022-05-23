import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageRoutingModule } from './welcome-page-routing.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';

import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  declarations: [WelcomePageComponent],
  exports: [
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    LogoModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class WelcomePageModule { }
