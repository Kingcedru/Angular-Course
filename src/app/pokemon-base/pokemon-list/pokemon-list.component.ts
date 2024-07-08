import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: false,
      isStylish: true,
    },
    {
      id: 1,
      name: 'squirtle',
      type: 'water',
      isCool: true,
      isStylish: true,
    },
    {
      id: 1,
      name: 'charmander',
      type: 'fire',
      isCool: true,
      isStylish: false,
    },
  ];
}
