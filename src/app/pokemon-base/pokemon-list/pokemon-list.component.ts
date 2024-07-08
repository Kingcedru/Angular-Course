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
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: true,
    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: true,
      isStylish: true,
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true,
      isStylish: false,
    },
  ];
  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  constructor() {}
  ngOnInit(): void {}
}
