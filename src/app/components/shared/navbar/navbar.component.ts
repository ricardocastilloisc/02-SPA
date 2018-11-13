import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _servicioHeroes: HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    this._servicioHeroes.buscarHeroes(termino);

  }

}
