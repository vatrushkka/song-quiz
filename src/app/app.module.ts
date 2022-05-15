import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';
import { QuizPageModule } from './pages/quiz-page/quiz-page.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { ButtonModule } from './shared/components/button/button.module';

import { AppComponent } from './app.component';

import { PlayerGuard } from './shared/services/player-guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    QuizPageModule,
    LogoModule,
    ButtonModule
  ],
  providers: [
    PlayerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
