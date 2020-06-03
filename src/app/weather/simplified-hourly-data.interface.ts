export interface SimplifiedHourlyData {
  dt: number,
  dateTime: string,
  dateText: string,
  dateMonthName: string,
  dateDayName: string,
  dateLongText: string,
  hourText: string,
  temp: number,
  tempMin: number,
  tempMax: number,
  tempFeel: number,
  pressure: number,
  description: string,
  icon: string,
  clouds: number,
  windSpeed: number,
  windSpeedKPH: number,
  windDeg: number,
}

// struktura danych do poprawy:
//   - wydzielić CZAS LOKLANY z CZASU ZAPYTANIA oraz wpływ tego na datę - grupowanie prognóz względem daty LOKALNEJ!