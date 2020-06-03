import { Component, OnInit, Input } from '@angular/core';
import { SimplifiedHourlyData } from '../../simplified-hourly-data.interface';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit {
@Input() hourlyForecast: SimplifiedHourlyData;

  constructor() { }

  ngOnInit(): void {
  }

}
