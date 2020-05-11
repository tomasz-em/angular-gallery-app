import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    // deklaracje TYPÓW zmiennych oraz ich WARTOŚCI (gdy daje się je ustawić poczatkowo lub łatwo określić)
  pictures: Array <any>;  // dane do wyświetlenia; konkretne typy na później, rekord/interfejs trzeba zdefnioniować
  currentIndex: number = 0; // bieżąca pozycja przeglądana w powiększeniu; zaczynamy od ZERA, tj. od POCZĄTKU TABLICY
  timeInterval: number = 5000; // czas wyświetlenia bieżącego obrazka / przejścia pomiędzy slajdami
  rememberedInterval: any;  // wskaźnik na czas przejścia
  isPaused: boolean = false;  // stan pauzy - czy przegląd slajdów jest wstrzymany?

  constructor() {
    // warto użyć tablicy obiektów, np. by pozyskać "alt" czyt jakieś inne treści
    this.pictures = [
      {
        url: 'https://images.unsplash.com/photo-1588196406942-d1c10002b815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Wysokie Tatry, Słowacja'
      },
      {
        url: 'https://images.unsplash.com/photo-1577390722297-48661487c4aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        alt: 'Ptak zwabiony okruchami, stół pod schroniskiem w Tatrach po polskiej stronie'
      },
      {
        url: 'https://images.unsplash.com/photo-1588196997362-bd30a9baafe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Krokusy w Tatrach, Słowacja'
      },
      {
        url: 'https://images.unsplash.com/photo-1518983618434-4a4e0e3f67be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
        alt: 'Tak wygląda śnieżna zima, Babia Góra (Beskidy Zachodnie, Polska)'
      },
      {
        url: 'https://images.unsplash.com/photo-1584922096499-7852ca1cb981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        alt: 'Wysokie Tatry, Polska'
      }
    ];

    //currentInterval = setInterval( ...) ... by zatrzymać pokaz po kliknieciu i wystartować czas od tego kliknięcia... l8b blokwoać gdy hover    

    // startInterval() {...}
    // stopInterval() {...}
    // timeInterval =

    setInterval( () => {
      if ( this.currentIndex < ( this.pictures.length - 1 ) ) this.currentIndex = this.currentIndex + 1;
      else this.currentIndex = 0;
    }, this.timeInterval );

  } //   // constructor-END

   handleClick( passedIndex ) {
    if ( passedIndex < ( this.pictures.length ) && ( passedIndex >= 0 ) )
    this.currentIndex = passedIndex;
   }

   handlePrev () { // logikę  poprawić o przejście na początek/koniec
    if ( this.currentIndex === 0 ) this.currentIndex = this.pictures.length - 1;
    else this.currentIndex = this.currentIndex - 1;
   }

   handleNext () {
      if ( this.currentIndex === ( this.pictures.length - 1) ) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
   }

  /* ngOnInit(): void {  // i tak nie zadziała, nie jest teraz wykorzystywane
  } */

}
