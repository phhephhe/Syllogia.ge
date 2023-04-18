import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainProjectComponent } from './main-project/main-project.component';
import { TeamBackgroundComponent } from './team-background/team-background.component';
import { SliderComponent } from './slider/slider.component';
import { ReviewComponent } from './review/review.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { FooterComponent } from './footer/footer.component';



// import { MaterialModule } from 'src/app/material/material.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSlideComponent,
    AboutUsComponent,
    MainProjectComponent,
    TeamBackgroundComponent,
    SliderComponent,
    ReviewComponent,
    TeamMembersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    NgImageSliderModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
