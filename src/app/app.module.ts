import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedUiModule } from './shared-ui/shared-ui.module';
import { UndrawModule } from './undraw/undraw.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiModule,
    UndrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
