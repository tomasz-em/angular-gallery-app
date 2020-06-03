import { Component, OnInit, Input } from '@angular/core';
import { SimplifiedForecastData } from '../simplified-forecast-data.interface';
// import { WeatherData } from '../weather-data.interface'; // import struktury niepotrzebny, skoro nie jest otrzymywany ten zbiór danych

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  // @Input() forecastWeather: WeatherData; // nie ma sensu wysyłać podstawowege zbioru z API, skoro i tak nie jest wyświetlany
  @Input() simplifiedForecast: SimplifiedForecastData;

  constructor() { }

  ngOnInit(): void {
  }

}
