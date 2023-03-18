import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/model/pokemons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemons = new Pokemons();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.buscarPokemons()
  }

  buscarPokemons() {
    this.pokemonService.buscarTodosPokemons().subscribe({
      next: res => {
        console.log(res)
        this.pokemons = res
      }
    })
  }

  tratarNome(nome: string) {
    return nome.substring(0,1).toUpperCase() + nome.substring(1)
  }

  buscarImagem(url: string) {
    return this.pokemonService.urlImagem(url.split("/").at(6))
  }
}
