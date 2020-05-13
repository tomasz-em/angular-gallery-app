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
  isPaused: boolean = true;  // stan pauzy - czy przegląd slajdów jest wstrzymany?
  wasInterrupted: boolean = false;  // czy jakkolwiek JUŻ zablokowano pauzę? 

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

    this.startSlideshow();
    //currentInterval = setInterval( ...) ... by zatrzymać pokaz po kliknieciu i wystartować czas od tego kliknięcia... l8b blokwoać gdy hover    

  } //   // constructor-END

    slideshow() {
      if ( this.currentIndex < ( this.pictures.length - 1 ) ) this.currentIndex = this.currentIndex + 1;  // efektywny zakres to MAX-2
      else this.currentIndex = 0;
      this.wasInterrupted = false;
    }

    startSlideshow() {
        // ale nie wyzwalaj tego wielorotnie
      //if ( !this.wasInterrupted ) {
        this.stopSlideshow();
        // this.rememberedInterval = setInterval( this.slideShow, this.timeInterval );  // wykonaj wielokrotnie zapamiętaną funkcję
        this.rememberedInterval = setInterval( () => {
            this.slideshow();  // jawne wywołanie jako podległośc tej funkcji

          }, this.timeInterval );
        this.isPaused = false;
      //}  
    }

    stopSlideshow() {
      // console.log('PRZED zatrzymaniem', this.rememberedInterval );
      clearInterval( this.rememberedInterval );
      // console.log('PO zatrzymaniu', this.rememberedInterval );
      this.wasInterrupted = true; // aktywacja blokady na  PONOWNĄ aktywację zdarzenia, by uniknąć wieloktrotnych wywołań
      this.isPaused = true;
    }
    // timeInterval =




   handleClick( passedIndex ) {
    if ( passedIndex < ( this.pictures.length ) && ( passedIndex >= 0 ) )
    this.currentIndex = passedIndex;
    this.startSlideshow();
   }

   handlePrev () { // logikę  poprawić o przejście na początek/koniec
    if ( this.currentIndex === 0 ) this.currentIndex = this.pictures.length - 1;
    else this.currentIndex = this.currentIndex - 1;
    this.startSlideshow();  // + restart czasu pokazywania DOCELOWEGO slajdu
   }

   handleNext () {
      if ( this.currentIndex === ( this.pictures.length - 1) ) this.currentIndex = 0;
      else this.currentIndex = this.currentIndex + 1;
      this.startSlideshow();  // + restart czasu pokazywania DOCELOWEGO slajdu
   }

  /* ngOnInit(): void {  // i tak nie zadziała, nie jest teraz wykorzystywane
  } */

}
