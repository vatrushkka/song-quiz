import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryPageRoutingModule } from './summary-page-routing.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { LogoModule } from '../../shared/components/logo/logo.module';

import { SummaryPageComponent } from './summary-page.component';

@NgModule({
  declarations: [
    SummaryPageComponent
  ],
  imports: [
    CommonModule,
    SummaryPageRoutingModule,
    ButtonModule,
    LogoModule
  ],
  exports: [
    SummaryPageComponent
  ]
})
export class SummaryPageModule { }
