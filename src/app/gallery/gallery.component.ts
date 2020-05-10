import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    // deklaracje TYPÓW zmiennych
  pictures: Array <object>;
  currentIndex: Number;
  timeInterval: Number;
  rememberedInterval: any;
  isPaused: false;

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
        alt: 'Zima na obrazku, Babia Góra (Tatry, Polska)'
      },
      {
        url: 'https://images.unsplash.com/photo-1584922096499-7852ca1cb981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        alt: 'Wysokie Tatry, Polska'
      }
    ];
    this.timeInterval = 5000;
    this.currentIndex = 0; // wybór początkowej wartość do podglądu spośród dopstępnych 
    //currentInterval = setInterval( ...) ... by zatrzymać pokaz po kliknieciu i wystartować czas od tego kliknięcia... l8b blokwoać gdy hover    

    // startInterval() {...}
    // stopInterval() {...}
    // timeInterval =

    setInterval( () => {
      if ( this.currentIndex < ( this.pictures.length - 1 ) ) this.currentIndex = this.currentIndex + 1;
      else this.currentIndex = 0;
    }, this.timeInterval );
   }

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

  ngOnInit(): void {
  }

}



// z jakiejś racji "moje wklajanie z modyfikacją"  nie działa :/....

/* @Component ({
  selector : 'app-gallery' ,
  templateUrl : './gallery.component.html' ,
  styleUrls : [ './gallery.component.css' ]
})
export class GalleryComponent {
  selectedIndex : number;
  pictures : Array <string> ;

  constructor () {
  // zdjęcia pochodzą z galerii mgsm: http://www.mgsm.pl/pl/katalog/samsung/galaxys9/galeria/samsung-galaxy-s9-07/
  this.pictures = [
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-07.jpg' ,
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-02.jpg' ,
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-06.jpg' ,
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-04.jpg' ,
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-03.jpg' ,
    'http://files.mgsm.pl/phones/samsung-galaxy-s9/samsung-galaxy-s9-05.jpg'
  ];
  this.selectedIndex = 0 ;
  }

//  ngOnInit(): void {
//  }

  get selectedPicture () : string {
    return this.pictures[ this.selectedIndex ];
  }
} // class-Gallery-END
 */

