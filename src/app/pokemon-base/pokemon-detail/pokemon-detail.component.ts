import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css',
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  detail!: Pokemon;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    this.remove.emit(this.detail);
  }
}
