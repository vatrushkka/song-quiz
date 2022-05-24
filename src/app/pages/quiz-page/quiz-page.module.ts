import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageRoutingModule } from './quiz-page-routing.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';

import { QuizPageComponent } from './quiz-page.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuizOptionComponent } from './components/quiz-option/quiz-option.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizPlayerComponent } from './components/quiz-player/quiz-player.component';
import { SongInfoComponent } from './components/song-info/song-info.component';

@NgModule({
  declarations: [
    QuizPageComponent,
    ProgressBarComponent,
    QuizOptionComponent,
    QuizComponent,
    QuizPlayerComponent,
    SongInfoComponent
  ],
  imports: [
    CommonModule,
    QuizPageRoutingModule,
    ButtonModule,
    HeaderModule,
    LoaderModule,
    ReactiveFormsModule
  ],
  exports: [
    QuizPageComponent
  ]
})
export class QuizPageModule { }
