import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  getPokemon(id: number) {
    this.http.get(`${POKEMON_API}`);
  }
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(POKEMON_API);
  }
}
