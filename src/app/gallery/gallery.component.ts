import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
/*   pictures: Array <string>;
  currentIndex: Number; */

    // warto użyć tablicy obiektów, np. by pozyskać "alt" czyt jakieś inne treści
    pictures = [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1066&q=80'
    ];
    timeInterval = 5000;
    currentIndex = 0; // wybór początkowej wartość do podglądu spośród dopstępnych 
    //currentInterval = setInterval( ...) ... by zatrzymać pokaz po kliknieciu i wystartować czas od tego kliknięcia... l8b blokwoać gdy hover

  constructor() {

    // startInterval() {...}
    // stopInterval() {...}

    setInterval( () => {
      if ( this.currentIndex < ( this.pictures.length - 1 ) ) this.currentIndex = this.currentIndex + 1;
      else this.currentIndex = 0;
    }, this.timeInterval );
   }

   handleClick( currentIndex ) {
     this.currentIndex = currentIndex;
   }

   handlePrev ( currentIndex ) {
    // this.currentIndex = currentIndex;
   }

   handleNext ( currentIndex ) {
    // this.currentIndex = currentIndex;
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

