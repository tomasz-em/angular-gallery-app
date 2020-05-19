import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../weather-data.interface';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.css']
})
export class WeatherConditionComponent implements OnInit {
  @Input() currentWeather: WeatherData;
  @Input() enteredLocation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
