import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string; 
  data: any[];
  isEmptyLocationName: boolean;

  constructor() {
    this.location = '';  // zmienna z dwustronnym powiązaniem w szablonie -- ngModel
    this.data = null;
    this.isEmptyLocationName = false;
   }

  handleSearch() {
    if ( this.location.length < 1 ) this.isEmptyLocationName = true;
    else {
      this.isEmptyLocationName = false;
      // odpytaj serwer o pogodę

      // const adresAPI = 'https://openweathermap.org/...q=' + this.location + '&^tgYT^&tgy&^g7*&*';
    // fetch( adresAPI).
    // .then( (res) => res.json() )
    // .then( data => {
    //    console.log( {data} );
    //    this.data = data;
    // }  )

    } // IF-this.location.length-END
  }

  convertKelvinsToCeslius( tempKelvins) {
    return Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy"
  } 


}
