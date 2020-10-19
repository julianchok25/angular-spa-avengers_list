import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  // Arreglo de Heroes
  heroes: Heroe[] = [];
  constructor( private heroesService: HeroesService) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}
