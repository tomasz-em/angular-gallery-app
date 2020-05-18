import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  APIkey: string = 'ea391bb99dff26ad3deb547bcda175fc';    //@gmail.com
  location: string;
  isEmptyLocationName: boolean;
  typedLocation: string; 
  weatherData: any;

  constructor() {
    this.location = '';  // zmienna z dwustronnym powiązaniem w szablonie -- ngModel
    this.weatherData = null;
    this.isEmptyLocationName = false;
   }

  handleSearch() {
    if ( this.location.length < 1 ) this.isEmptyLocationName = true;
    else {
      this.isEmptyLocationName = false;
      // odpytaj serwer o pogodę
      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${ this.location }&appid=${ this.APIkey }`;
      //let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=${ this.APIkey }`;

      // const adresAPI = 'https://openweathermap.org/...q=' + this.location + '&^tgYT^&tgy&^g7*&*';
    // fetch( adresAPI).
    // .then( (res) => res.json() )
    // .then( data => {
    //    console.log( {data} );
    //    this.data = data;
    // }  )

    fetch( weatherURL )
      .then( res => res.json() )
      .then( data => {
          console.log({ data });
          this.weatherData = {};  // zerowanie zawartości
          this.typedLocation = this.location;

          if ( data.cod === 200 ) {
            // dane poprawne...
            this.weatherData = data;
          }
          
          if ( data.cod === 404 ) {// błędna lokalizacja lub jej zły zapis
            this.weatherData = data;
            
          }  
      });


    } // IF-this.location.length-END
  }

  convertKelvinsToCeslius( tempKelvins) {
    return Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy"
  } 


}
