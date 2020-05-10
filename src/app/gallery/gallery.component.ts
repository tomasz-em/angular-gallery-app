import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

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

