import { Component, OnInit, Output, EventEmitter } from '@angular/core';  // dodanie  dodatkowych importów dla: "Output" oraz "EventEmitter" (komponent podrzędny)

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {
  isSelectedGallery: boolean = false;
  isSelectedWeatherForecast: boolean = false;
  selectedValue: string = "";
  @Output() notifyGallerySelection: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notifyWeatherForecastSelection: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  handleChange() {
    if ( this.selectedValue == "angular-gallery" ) {  // głupie, ale wskazanie na "wartość PIERWSZEGO wyboru"
        // console.log("GALERIA:", this.isSelectedGallery, ", pogoda:", this.isSelectedWeatherForecast);
        this.isSelectedGallery = true;
        this.isSelectedWeatherForecast = false;
        this.notifyGallerySelection.emit(true);
    }
       // wystarczy?! czy nie trzeba "zerować" stanu poprzedniego?! 
    if ( this.selectedValue == "weather-forecast" ) { // wybór pola z "wartością DRUGIEGO wyboru"
      // console.log("POGODA:", this.isSelectedWeatherForecast, ", galeria:", this.isSelectedGallery);
      this.isSelectedGallery = false;
      this.isSelectedWeatherForecast = true;
      this.notifyWeatherForecastSelection.emit(true);
    }
  }

  ngOnInit(): void {
  }

}
