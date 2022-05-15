import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageRoutingModule } from './quiz-page-routing.module';
import { ButtonModule } from '../../shared/components/button/button.module';

import { QuizPageComponent } from './quiz-page.component';

@NgModule({
  declarations: [
    QuizPageComponent
  ],
  imports: [
    CommonModule,
    QuizPageRoutingModule,
    ButtonModule
  ],
  exports: [
    QuizPageComponent
  ]
})
export class QuizPageModule { }
