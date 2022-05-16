import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WelcomePageModule } from './pages/welcome-page/welcome-page.module';
import { QuizPageModule } from './pages/quiz-page/quiz-page.module';
import { SummaryPageModule} from './pages/summary-page/summary-page.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { ButtonModule } from './shared/components/button/button.module';
import { HeaderModule } from './shared/components/header/header.module';

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
    SummaryPageModule,
    LogoModule,
    ButtonModule,
    HeaderModule
  ],
  providers: [
    PlayerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
