import { Component } from '@angular/core';
import { Film } from './models/film.model';
import { Films } from './models/films.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ilk angular';
  user:string ="Türkay";
  isChecked:boolean = true;

  sehirler: string[] = [
    "Adana","Ankara","İstanbul","Eskişehir"
  ];

  filmler: Film[] =Films;


  isAllFilmShowing:boolean = true;
  
  getButtonText():string{
    if (this.isAllFilmShowing) {
      return "Sadece izlenmeyenleri göster";
    }
    else{
      return "Tümünü göster"
    }
  }

  filter():void{
     this.isAllFilmShowing = !this.isAllFilmShowing;

     !this.isAllFilmShowing ? this.filmler = this.filmler.filter(f=>!f.izlendiMi):
                              this.filmler = Films;

     console.log('tıklandı: ',this.filmler.length);
  }

  addNew(filmName:string):void{
    this.filmler.push(new Film(filmName));
  }


}
