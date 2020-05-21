import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../weather-data.interface';
// import { convertKelvinsToCelsius } from '../weather.functions';
declare const convertKelvinsToCelsius: any; // "import" z zadeklarowanego pliku wspólnych zasobów, tu funkcji w sekcji '"scripts": [  "src/app/weather/weather.functions.ts" ]', plik "angular.json"... UŻYCIE NIE DZIAŁA?!
// declare const convertUnixEpochToTimeString: any;  // "import" zewnętrznej funkcji - godziny:minuty:sekundy
declare const convertUnixEpochToHourAndMinutesString: any;  // "import" zewnętrznej funkcji - godziny:minuty
declare const convertMPS2KPH: any;  // aż za prosty konwerter

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.css']
})
export class WeatherConditionComponent implements OnInit {
  @Input() currentWeather: WeatherData;   // wartości przekazywane do komponentu w "@Input"!
  @Input() enteredLocation: string;

  constructor() { }

  convertKelvinsToCelsius( tempKelvins: number ): number {
    return convertKelvinsToCelsius( tempKelvins );   // wewnętrznie używa ZADEKLAROWANEJ funkcji z biblioteki... by była ta funkcja dostępna w szablonie
  }

  convertTimestampToTimeString( timestamp: number ): string {
    // return convertUnixEpochToTimeString( timestamp );
    return convertUnixEpochToHourAndMinutesString( timestamp );
  }

  convertVelocityToKPH( velocity: number ): string {  // zwróci wynik z dokładnością do DWÓCH miejsc po przecinku dziesiętnym
    return convertMPS2KPH( velocity );
  }

  ngOnInit(): void {
  }

}
