import { SimplifiedHourlyData } from './simplified-hourly-data.interface';

export interface SimplifiedForecastData {

  daysList: [ // cała tablica musi mieć jakąś nazwę (nie wystęuje później w zbiorze danych, jako odwołanie do zawartości, tj. dowolnego elementu)
      {
        date: string,
        hourlyForecasts: SimplifiedHourlyData[]
      }
  ]
}