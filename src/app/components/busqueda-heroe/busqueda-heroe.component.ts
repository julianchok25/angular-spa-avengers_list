import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styles: []
})
export class BusquedaHeroeComponent implements OnInit {

  // Es un arreglo porque pueden ser varias las coincidencias, guarda varios valores
  heroes: Heroe[] = [];
  termino: string;

  constructor(private heroService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroService.buscarHeroes(params.termino);
      // console.log(this.heroes);
    });
  }

  verHeroe(index: number) {
    this.router.navigate( ['/heroe', index]);
  }
}
