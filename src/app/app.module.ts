import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { ButtonModule } from './shared/components/button/button.module';
import { HeaderModule } from './shared/components/header/header.module';
import { LoaderModule } from './shared/components/loader/loader.module';

import { AppComponent } from './app.component';

import { PlayerGuard } from './shared/services/player-guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LogoModule,
    ButtonModule,
    HeaderModule,
    LoaderModule
  ],
  providers: [
    PlayerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
