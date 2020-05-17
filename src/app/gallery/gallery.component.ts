import { Component, OnInit, APP_INITIALIZER } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    // deklaracje TYPÓW zmiennych oraz ich WARTOŚCI (gdy daje się je ustawić poczatkowo lub łatwo określić)
  pictures: Array <any>;  // dane do wyświetlenia; konkretne typy na później, rekord/interfejs trzeba zdefnioniować
  currentIndex: number = 0; // bieżąca pozycja przeglądana w powiększeniu; zaczynamy od ZERA, tj. od POCZĄTKU TABLICY
  timeIntervalSeconds: number = 5; // czas wyświetlenia bieżącego obrazka / przejścia pomiędzy slajdami
  rememberedInterval: any;  // wskaźnik na czas przejścia
  isPaused: boolean = true;  // stan pauzy - czy przegląd slajdów jest wstrzymany?
  isSlideshowRunning: boolean = false;  // teoretycznie jako przeciwieństwo "isPaused" ale używane tylko w logice bez CSSa, przy stracie każdego ze slajdów  
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
        this.isSlideshowRunning = false;  // tu wskzaźnik, ze coś się wywołało... ale chyb ata wartość nie jest śledzona
    }

    startSlideshow() {
        // ale nie wyzwalaj tego wielorotnie
      //if ( !this.wasInterrupted ) {
        this.stopSlideshow();
        // this.rememberedInterval = setInterval( this.slideShow, this.timeInterval );  // wykonaj wielokrotnie zapamiętaną funkcję
        this.rememberedInterval = setInterval( () => {
            this.slideshow();  // jawne wywołanie jako podległośc tej funkcji

          }, this.timeIntervalSeconds * 1000 );  // sekundy na milisekundy
        this.isPaused = false;
        this.isSlideshowRunning = true;
      //}  
    }

    stopSlideshow() {
      console.log('PRZED zatrzymaniem', this.rememberedInterval );
      clearInterval( this.rememberedInterval );
      console.log('PO zatrzymaniu', this.rememberedInterval );
      this.wasInterrupted = true; // aktywacja blokady na  PONOWNĄ aktywację zdarzenia, by uniknąć wieloktrotnych wywołań
      this.isPaused = true;
      this.isSlideshowRunning = false;
      //  this.restyleProgressBar();  // NIE POMAGA JAWNA
    }
    // timeInterval =

    restyleProgressBar() {
      const styleObject = {
        'animation-duration': this.timeIntervalSeconds +'s'
      };
      // poniej WARUNKOWE OKREŚLANIE STYLI INLINE względem skomplikowanych warunków logicznych...
        if ( this.isPaused && !this.isSlideshowRunning ) {
          styleObject['animation-play-state'] = 'paused';
          // styleObject['animation-fill-mode'] = 'forwards';

        }
        if ( this.isSlideshowRunning ) {
          styleObject['animation-play-state'] = 'running';
          styleObject['animation-iteration-count'] = 'infinite';  // dlaczego atrybuty "ginie" i znów trzeba go powielać?!

          // styleObject['animation-fill-mode'] = 'none';
        }
/*         if ( !this.isPaused && this.isSlideshowRunning ) { // czy ta reguła jest potrzebna? ...ale ona się najczęsciej loguje po pauzie
          styleObject['animation-play-state'] = 'initial';  // notacja tablicowa ze stringiem
          styleObject['animation-iteration-count'] = 'infinite';
          // ewentualne RETURNY obiektu tutaj, by nie wchodzić niepotrzebnie w inne warunki logiczne (zależnie od logiki, jak zawsze)
        } */

        if ( this.isPaused && this.wasInterrupted ) {
          styleObject['animation-name'] = 'none';
          // this.wasInterrupted = false;  // !!! TEGO SIĘ TAK NIE POWINNO ROBIĆ, TU W NIECZYSTEJ FUNKCJI !!!  
        }

      console.log("aktualizacja styli paska postępu: ", styleObject);
      return styleObject; // zwrot zbudowanych atrybutów CSS z wartościami, które określą wygląd lub/i zachowanie obiektu w DOMie
    }

    progressAnimationEnd() {
      this.isPaused = true;   // usatawienie "błędnych" wartości, by za chwilę je przywrócić na stan pokazu slajdów
      this.isSlideshowRunning = false;
      console.log("animacja POSTĘPU się zakończyła...");
      this.isPaused = false;
      this.isSlideshowRunning = true;

    }

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
