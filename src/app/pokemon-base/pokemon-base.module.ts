import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonListComponent,
    PokemonDetailComponent,
    HttpClientModule,
  ],
  exports: [PokemonListComponent, PokemonDetailComponent],
  providers: [PokemonService],
})
export class PokemonBaseModule {}
