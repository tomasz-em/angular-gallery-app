import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  APIkey: string = 'ea391bb99dff26ad3deb547bcda175fc';    //@gmail.com
  location: string = '';  // na dwustronne powiązanie z treścią w szablonie -- ngModel;
  isEmptyLocationName: boolean;
  typedLocation: string;  // jako zawartość na wpisaną lokalziację w ostatnim zapytaniu (dla neigo jest właśnie wyświetlany wynik) 
  weatherData: any;
  isLocationRequestError: boolean = false;  // czy wystąpił błąd, do sygnalizowania komunikatami na stronie 
  isLocationRequestDoneOK: boolean = false; // póki co stan TAK/NIE, prawdopodobnie do rozszerzenia...

  constructor() {
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

    fetch( weatherURL )
      .then( response => {
        /* if ( res.status == 404) {
            this.isLocationRequestDoneOK = false; // TUTAJ?!
            this.isLocationRequestError = true; // TUTAJ?!
          } */
        // return res.json() 
        //if (response.status === 404 || response.status === 200) return response.json(); // WARUNKO czy ZAWSZE zwracać WYNIK?!
         return response.json();  // póki co ZAWSZE zwrot OTRZYMANYCH DANYCH
      })
      .then( data => {
        console.log({ data });
        this.weatherData = {};  // zerowanie poprzedniej zawartości zapytania (o ile jakaś była)
        this.typedLocation = this.location;
        this.weatherData = data;  // przypiasnie OTRZYMANYCH danych, o JAKIELKOLWIEK otrzymanej strukturze!
        this.isLocationRequestDoneOK = false; // WSTĘPNIE ustawiane na błąd - ZAWSZE!
        this.isLocationRequestError = true; // TU TEŻ

        if ( data.cod == 200 ) {  // ...jednak DANE SĄ poprawne...
          this.isLocationRequestDoneOK = true;
          this.isLocationRequestError = false;
          this.location = "";
       }
      })
     .catch( error => {
        this.isLocationRequestDoneOK = false;   // wystąpił błąd
        this.isLocationRequestError = true;
        this.weatherData = null;  // zerowanie ewentualnej otrzymanej wcześnej zawartości! 
        console.warn("BŁĄD:", error); // dodatkowa notyfikacja
          // też treść błędu może wyświetlić jakoś pod formularzem
      });


    } // IF-this.location.length-END
  }

  convertKelvinsToCelsius( tempKelvins) {
    return Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy"
  } 


}
