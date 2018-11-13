import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { close } from 'inspector';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html',
  styleUrls: ['./buscardor.component.css']
})
export class BuscardorComponent implements OnInit {

  heroes: Heroe[] = [];

  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes(params['termino']);
      });

    console.log(this.heroe);

  }
}
