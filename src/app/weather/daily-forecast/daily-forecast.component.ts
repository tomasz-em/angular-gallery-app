import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from '../weather-data.interface';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  @Input() forecastWeather: WeatherData; 
  @Input() simplifiedForecast: any; // TYMCZASOWO!
  constructor() { }

  ngOnInit(): void {
  }

}
