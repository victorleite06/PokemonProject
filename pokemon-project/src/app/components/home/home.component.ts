import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PokemonSimples } from 'src/app/model/pokemonSimples';
import { Pokemons } from 'src/app/model/pokemons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemons = new Pokemons();
  pokemonsFiltrados: any[] = []
  pokemonSelecionado: PokemonSimples = new PokemonSimples();
  mostrarDetalhes: boolean = false;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.buscarPokemons()
  }

  buscarPokemons() {
    this.pokemonService.buscarTodosPokemons().subscribe({
      next: res => {
        this.pokemons = res
        this.pokemonsFiltrados = res.results
      }
    })
  }

  filtrarPokemon(event: any) {
    this.pokemonsFiltrados = this.pokemons.results.filter(p => p.name.toLowerCase().includes(event.target.value))
  }

  tratarNome(nome: string) {
    return nome.substring(0,1).toUpperCase() + nome.substring(1)
  }

  buscarImagem(url: string) {
    return this.pokemonService.urlImagem(url.split("/").at(6))
  }

  selecionarPokemon(pokemon: PokemonSimples) {
    this.pokemonSelecionado = pokemon
    this.mostrarDetalhes = true
  }
}
