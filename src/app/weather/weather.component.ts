import { Component } from '@angular/core';
import { WeatherData } from './weather-data.interface'; // import irterfejsu typu danych, który zwraca API openweathermap dla BIEŻĄCEJ pogody
import { ForecastData } from './forecast-data.interface';
// import { convertKelvinsToCelsius } from './weather.functions'; // ?!
declare const convertKelvinsToCelsius: any; // "import" z zadeklarowanego pliku wspólnych zasobów, tu funkcji; ścieżka do pliku dopisana w "angular.json"
declare const differenceUserTimezoneToGMTInSeconds: any; // różnica strefy czasowej przeglądarki użytkowanika a wpisaną strefą czasową wpisanej lokalizacji 
declare const convertUnixEpochToLongDate: any;  // przelicza czas sekundowy na datę i dzień tygodnia
declare const convertMPS2KPH: any; // przeliczenia [m/s] na [km/h]
declare const getNMonthName: any; // zwraca nazwę N-tego miesiąca dla [0..11]
declare const getWeekdayName: any; // zwraca anzwę dla dnia tygodnia [0..6]

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  APIkey: string = 'ea391bb99dff26ad3deb547bcda175fc';    // @gmail.com
  location: string = '';  // na dwustronne powiązanie z treścią w szablonie -- ngModel;
  isEmptyLocationName: boolean; // stan początkowy dla komponentu... (przyposanie równoważne konkstruktorowi)?
  typedLocation: string;  // jako zawartość na wpisaną lokalziację w ostatnim zapytaniu (dla neigo jest właśnie wyświetlany wynik) 
  weatherData: WeatherData; // zdefiniowano INTERFEJS dla zwracanych z API danych; początkowe zerowanie
  isLocationRequestError: boolean = false;  // czy wystąpił błąd, do sygnalizowania komunikatami na stronie 
  isLocationRequestDoneOK: boolean = false; // póki co stan TAK/NIE, prawdopodobnie do rozszerzenia...
  userTimezoneOffset: number = differenceUserTimezoneToGMTInSeconds(); // strefa czasowa użytkownika w sekundach (wartość w odniesieniu do GMT) 
  isForecastRequestError: boolean = false;  // czy wystąpił błąd, do sygnalizowania komunikatami na stronie 
  isForecastRequestDoneOK: boolean = false; // póki co stan TAK/NIE
  forecastData: ForecastData;  // dane o prognozie do otrzymania z API
  simplifiedForecastData = null;

  constructor() { 
    this.weatherData = null;
    this.isEmptyLocationName = false;
   }

  handleSearch(): void {
    if ( this.location.length < 1 ) this.isEmptyLocationName = true;
    else {
      this.isEmptyLocationName = false;
      // odpytaj serwer o pogodę
      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${ this.location }&appid=${ this.APIkey }&lang=pl`; // "jenzyk polsky" działa ;)
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
      .then( ( data: WeatherData ) => { // użycie typu danych
        console.log({ data });
        this.weatherData = null;  // zerowanie poprzedniej zawartości zapytania (o ile jakaś była)
        this.typedLocation = this.location;
        this.weatherData = data;  // przypiasnie OTRZYMANYCH danych, o JAKIELKOLWIEK otrzymanej strukturze!
        this.isLocationRequestDoneOK = false; // WSTĘPNIE ustawiane na błąd - ZAWSZE!
        this.isLocationRequestError = true; // TU TEŻ

        if ( data.cod == 200 ) {  // ...jednak DANE SĄ poprawne...
          this.isLocationRequestDoneOK = true;
          this.isLocationRequestError = false;
          this.location = "";

          let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${ this.typedLocation }&appid=${ this.APIkey }&lang=pl`; // "jenzyk polsky" działa ;)

          fetch( forecastURL )
            .then( response => {
              return response.json();  // póki co ZAWSZE zwrot OTRZYMANYCH DANYCH
            })
            .then( ( forecastData: ForecastData ) => { // użycie typu danych
              console.log( forecastData );
              this.forecastData = null;  // zerowanie poprzedniej zawartości zapytania (o ile jakaś była)
              this.forecastData = forecastData;  // przypiasnie OTRZYMANYCH danych, o JAKIELKOLWIEK otrzymanej strukturze!
              this.simplifiedForecastData = this.simplifyForecastData( forecastData );

              if ( forecastData.cod == "200" ) {  // !!! API zwraca DANE POPRAWNE jako kod "200" (tesktowo!) !!!
                this.isForecastRequestDoneOK = true;
                this.isForecastRequestError = false;
              }
            })
            .catch ( error => {
              this.isForecastRequestDoneOK = false;   // wystąpił błąd
              this.isForecastRequestError = true;
              this.forecastData = null;  // zerowanie ewentualnej otrzymanej wcześnej zawartości! 
              console.warn("BŁĄD POGODY DLA LOKALIZACJI:", error); // dodatkowa notyfikacja
            });
          } // IF-data.cod-END
      })
     .catch( error => {
        this.isLocationRequestDoneOK = false;   // wystąpił błąd
        this.isLocationRequestError = true;
        this.weatherData = null;  // zerowanie ewentualnej otrzymanej wcześnej zawartości! 
        console.warn("BŁĄD WPISANEJ LOKALIZACJI:", error); // dodatkowa notyfikacja
          // też treść błędu może wyświetlić jakoś pod formularzem
      });

    } // IF-this.location.length-END
  }

  simplifyForecastData( forecast: ForecastData ) {
    let currentDayDate = "",
      dateList = [],
      allForecasts = [],
      currentDayArr = [],
      theWhole = [];
/*       theWhole = [
          {
            date: "",
            hourlyForecasts: []  // nazwa jest dobra
          }
      ]; */

    //let allDaysForecast ...
    allForecasts = forecast.list.map( (hourlyForecast, index ) => {
      let newObj = {
        dt: hourlyForecast.dt,
        dateTime: hourlyForecast.dt_txt,
        dateText: hourlyForecast.dt_txt.substr(0, 10),
        dateMonthName: getNMonthName( parseInt( hourlyForecast.dt_txt.substr(5,6) ) - 1 ),
        dateDayName: getWeekdayName( new Date( hourlyForecast.dt * 1000 ).getUTCDay() ),
        dateLongText: convertUnixEpochToLongDate( hourlyForecast.dt ),
        hourText: hourlyForecast.dt_txt.substr(11,5),
        temp: convertKelvinsToCelsius( hourlyForecast.main.temp ),
        tempMin: convertKelvinsToCelsius( hourlyForecast.main.temp_min ),
        tempMax: convertKelvinsToCelsius( hourlyForecast.main.temp_max ),
        tempFeel: convertKelvinsToCelsius( hourlyForecast.main.feels_like ),
        pressure: hourlyForecast.main.pressure,
        description: hourlyForecast.weather[0].description,
        icon: hourlyForecast.weather[0].icon,
        clouds: hourlyForecast.clouds.all,
        windSpeed: hourlyForecast.wind.speed,
        windSpeedKPH: this.velocityToKPH( hourlyForecast.wind.speed ),
        windDeg: hourlyForecast.wind.deg,
      };

      if ( newObj.dateText != currentDayDate ) {  // dodanie od razu nowej daty do listy napotkanych
        dateList = [ ...dateList, newObj.dateText ];  // destrukturyzacja ze spread zamiast [].push()
        currentDayDate = newObj.dateText;
      }

    return newObj;  
    });

    dateList.forEach( ( currentDate, i ) => {
      theWhole = [ ...theWhole, { 
          date: currentDate,
          hourlyForecasts: [] 
        }
      ];  // od razu tworzenie pustej tablicy na godzinowe dane pogodowe

       allForecasts.forEach ( ( hourlyForecast, indx ) => {
        if ( currentDate === hourlyForecast.dateText ) { // wstawianie danych pogodowych do konkretnych dni
          theWhole[i].hourlyForecasts.push( hourlyForecast );
        }  
      });
    });

/*     dailyForecast.forEach ( ( hourlyForecast, i ) => {
      if ( hourlyForecast.dateText != currentDayDate ) {

      }

    }); */
    // return allForecasts;

    return theWhole;
  } 

/*   convertUnixEpochToLongDate( timestamp: number ): string {
    return convertUnixEpochToLongDate( timestamp );
  } */

  velocityToKPH ( velocity) {
    return convertMPS2KPH( velocity);
  }

  convertKelvinsToCelsius( tempKelvins: number ): number { //  MA UŻYWAĆ RAZ ZDEFINIOWANEJ I WSPÓLNEJ FUNKCJI NARZĘDZIOWEJ DLA APLIKACJI (tu taka sama nazwa)
    return convertKelvinsToCelsius( tempKelvins );   // wewnątrznie używa ZADEKLAROWANEJ funkcji z "biblioteki"...
  }

/*   convertKelvinsToCelsius ( tempKelvins: number ): number { // wersja niewspólna, na potrzeby TYLKO TEGO komponentu i jego szablonu 
    return Math.ceil( tempKelvins - 273.15 );
  } */

}
