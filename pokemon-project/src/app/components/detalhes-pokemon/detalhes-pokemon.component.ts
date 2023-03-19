import { Component, Input, OnChanges } from '@angular/core';
import { PokemonSimples } from 'src/app/model/pokemonSimples';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalhes-pokemon',
  templateUrl: './detalhes-pokemon.component.html',
  styleUrls: ['./detalhes-pokemon.component.css']
})
export class DetalhesPokemonComponent implements OnChanges {

  @Input() pokemon: PokemonSimples = new PokemonSimples();

  @Input() urlImagem: any;

  detalhes: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnChanges() {
    this.buscarDetalhesPokemon()
  }

  buscarDetalhesPokemon() {
    this.pokemonService.requisicaoPorURL(this.pokemon.url).subscribe({
      next: res => {
        console.log(res)
        this.detalhes = res
      }
    })
  }

  tratarNome(nome: string) {
    return nome.substring(0,1).toUpperCase() + nome.substring(1)
  }
}
