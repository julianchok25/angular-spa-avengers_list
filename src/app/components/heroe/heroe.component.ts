import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  // local variable to use in template
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroService.getHero(params.id);
      // console.log(this.heroe);
    });
  }
}
