import { Pokemon } from '../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private PokemonService: PokemonService) {}

  getPokemon(id: number) {}
  ngOnInit() {
    this.PokemonService.getPokemon(1);
  }
}
