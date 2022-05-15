import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page.component';
import { QuizPageRoutingModule } from './quiz-page-routing.module';

@NgModule({
  declarations: [
    QuizPageComponent
  ],
  imports: [
    CommonModule,
    QuizPageRoutingModule
  ],
  exports: [
    QuizPageComponent
  ]
})
export class QuizPageModule { }
