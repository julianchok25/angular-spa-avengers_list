import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  // Heroe comes from outside
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private route: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }

  viewHero() {
    this.route.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit( this.index );
  }

}
