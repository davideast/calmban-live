import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { LightBgComponent } from './light-bg/light-bg.component';
import { DarkBgComponent } from './dark-bg/dark-bg.component';
import { HeadingComponent } from './heading/heading.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpacerComponent } from './spacer/spacer.component';
import { RippleSpinnerComponent } from './ripple-spinner/ripple-spinner.component';

@NgModule({
  declarations: [
    MainSectionComponent, 
    LightBgComponent, 
    DarkBgComponent, 
    HeadingComponent,
    HeaderComponent,
    FooterComponent,
    SpacerComponent,
    RippleSpinnerComponent
  ],
  exports: [
    MainSectionComponent, 
    LightBgComponent, 
    DarkBgComponent,
    HeadingComponent,
    HeaderComponent,
    FooterComponent,
    RippleSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedUiModule { }
