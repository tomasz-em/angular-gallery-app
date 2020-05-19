import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // wymagane dopisanie tego by oiperować na formach

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherConditionComponent } from './weather/weather-condition/weather-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    WeatherComponent,
    WeatherConditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
