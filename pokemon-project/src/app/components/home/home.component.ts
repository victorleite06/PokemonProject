import { Component, OnInit } from '@angular/core';
import { PokemonSimples } from 'src/app/model/pokemonSimples';
import { Pokemons } from 'src/app/model/pokemons';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  geracoes: any[] = [];
  pokemons: any[] = [];
  pokemonsFiltrados: any[] = []
  pokemonSelecionado: PokemonSimples = new PokemonSimples();
  mostrarDetalhes: boolean = false;
  todasGeracoes: boolean = true

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.buscarPokemons()
  }

  buscarPokemons() {
    this.pokemonService.buscarTodosPokemons().subscribe({
      next: res => {
        res.results.forEach((poke: any) => {
          let aux = {
            name: poke.name.substring(0,1).toUpperCase() + poke.name.substring(1),
            url: poke.url,
            id: poke.url.split("/").at(6)
          }
          this.pokemons.push(aux)
        });
        this.pokemonsFiltrados = this.pokemons
      }
    })
  }

  searchPokemon(event: any) {
    this.pokemonsFiltrados = this.pokemons.filter(p => p.name.toLowerCase().includes(event.target.value.toLowerCase()))
  }

  buscarImagem(id: any) {
    return this.pokemonService.urlImagem(id)
  }

  selecionarPokemon(pokemon: PokemonSimples) {
    this.pokemonSelecionado = pokemon
    this.mostrarDetalhes = true
  }
}
