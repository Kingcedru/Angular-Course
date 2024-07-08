import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];
  constructor(private pokemonService: PokemonService) {}

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }
}
