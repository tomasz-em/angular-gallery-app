/* ścieżka do bieżącego pliku została dołączono do głównego pliku "angular.json" wewnątrz sekcji "builds", podelement '"scripts: []"

TEN PLIK MIMO ROZSZERZENIA "TS" JEST TRAKTOWANY JAKO "ZWYKŁY JS, tu ES5!"
  - konstrukcje ES6 zależne od użytej przeglądarki --KOD NIE JEST TRANSPILOWANY DO ES5
  - NIE DZIAŁAJĄ tu IMPORTY
  - BRAK obsługi typów TS
 */

function convertKelvinsToCelsius ( tempKelvins ) {  // zwykły JS, bez TS!!!
    return Math.ceil( tempKelvins - 273.15 );   // zaokrąglenie w górę do pełnych "Celsjuszy" 
}

function convertUnixEpochToTimeString( timestamp ) {
    var convertedDate = new Date( timestamp * 1000 );   // zamiana na milisekundy, jako "prawdziwy" znacznik epoki
    // return convertedDate.toUTCString() + " " + convertedDate.toLocaleString();  // po prostu godzina z dopełenieniem zerowym (jak w lokalnych ustawieniach komputera/przeglądarki) 
    // zawsze dodaje zero przed "tekstem czasu", by potem dwa ostatnie znaki napisu tylko wyświetlić
    return convertedDate.getHours() + ':' + ( "0" + convertedDate.getMinutes() ).substr(-2) + ':' + ( "0" + convertedDate.getSeconds() ).substr(-2);
}

function convertUnixEpochToHourAndMinutesString( timestamp ) {
    var convertedDate = new Date( timestamp * 1000 );   // zamiana na milisekundy, jako "prawdziwy" znacznik epoki
    return convertedDate.getHours() + ':' + ( "0" + convertedDate.getMinutes() ).substr(-2);    // godziny [0-23]:[00-59] (godziny JEDNO lub DWUcyfrowe, minuty DWUcyfrowe)
}

function convertUnixEpochToLongDate( timestamp ) {
    var convertedDate = new Date( timestamp * 1000 );   // zamiana na milisekundy, jako "prawdziwy" znacznik epoki
    return convertedDate.getDate() + ". " + getNMonthName( convertedDate.getMonth() ) + " " + convertedDate.getFullYear();
}

function convertUnixEpochToShortDate( timestamp ) {
    var convertedDate = new Date( timestamp * 1000 );   // zamiana sekund  na milisekundy
            // UWAGA: numer miesiąca jest inkrementowany dla prawidłowej numeracji; zwykłyzakres to [0,11], nieakceptowalny jako wyświetlanie dla ludzi
    return convertedDate.getFullYear() + "-" + ( "0" + ( convertedDate.getMonth() + 1 ) ).substr(-2) + "-" + ( "0" + convertedDate.getDate() ).substr(-2);
}   // docelowo zwracana forma daty: "YYYY-MM-DD" z ZERAMI jako dopełnieniem

function convertUnixEpochToShortDateWith24Hours( timestamp ) {
    var convertedDate = new Date( timestamp * 1000 );
    return convertUnixEpochToShortDate( timestamp ) + " " + ( "0" + ( convertedDate.getHours() ) ).substr(-2) + ":" + ( "0" + convertedDate.getMinutes() ).substr(-2) + ":" + ( "0" + convertedDate.getSeconds() ).substr(-2);
}   // docelowo zwracana forma daty: "YYYY-MM-DD HH:MM:SS" z ZERAMI jako dopełnieniem

function getWeekdayName( currentDayNumber ) {
    var weekdays = [ "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota" ];
    return weekdays[currentDayNumber];
}

function getNMonthName( currentmonthNumber ) {
    var months = [ "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia" ];
    return months[currentmonthNumber];
}

function convertMPS2KPH ( velocity ) {
    /* [m/s] na [km/h] ==> (m/s) * (60*60)/1000, albo po prostu przemożyć podaną predkość przez 3,6 ;) */
    return ( velocity * 3.6 ).toFixed(2);    // tyllko DWA miejsca po przecinku zwróci maksymalnie z ZAOKRĄGLENIEM
}

function differenceUserTimezoneToGMTInSeconds () {
    return new Date().getTimezoneOffset() * 60; //  * (-1) ?!
}