import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor() { }
  location = 'Warszawa';
  data = null;
  isEmptyCityName = false;

  handleSearch() {
    // const adresAPI = 'https://openweathermap.org/...q=' + this.location + '&^tgYT^&tgy&^g7*&*';
    // fetch( adresAPI).
    // .then( (res) => res.json() )
    // .then( data => {
    //    console.log( {data} );
    //    this.data = data;
    // }  )

  }

  convertKelvinsToCeslius( tempKelvins) {
    return Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy"
  } 


}
