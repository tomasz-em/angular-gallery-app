import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-gallery-app';
  isDisplayedGallery: boolean = false;
  isDisplayedWeatherForecast: boolean = false;

  constructor() {}

  onGalleryElementSelection( displayMe: boolean ): void {
    console.log("Wybrano GALERIĘ", displayMe);
    this.isDisplayedGallery = displayMe;  // true
    this.isDisplayedWeatherForecast = false;
      // czy ustawiać drugi (przeciwstawny) element?
  }

  onWeatherForecastElementSelection( displayMe: boolean ): void {
    console.log("Wybrano PROGNOZĘ POGODY", displayMe);
    this.isDisplayedWeatherForecast = displayMe;  // true
    this.isDisplayedGallery = false;  // true
          // czy ustawiać PIERWSZY (przeciwstawny) element?
  }

}
