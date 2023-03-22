import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAreaEncontroComponent } from 'src/app/modais/modal-area-encontro/modal-area-encontro.component';
import { ModalAtaquesComponent } from 'src/app/modais/modal-ataques/modal-ataques.component';
import { ModalHabilidadesComponent } from 'src/app/modais/modal-habilidades/modal-habilidades.component';
import { ModalJogosComponent } from 'src/app/modais/modal-jogos/modal-jogos.component';
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

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog) { }

  ngOnChanges() {
    this.buscarDetalhesPokemon()
  }

  buscarDetalhesPokemon() {
    this.pokemonService.requisicaoPorURL(this.pokemon.url).subscribe({
      next: res => {
        this.detalhes = res
      }
    })
  }

  tratarNome(nome: string) {
    return nome.substring(0,1).toUpperCase() + nome.substring(1)
  }

  openModalHabilidades(abilities: any) {
    let dialog = this.dialog.open(ModalHabilidadesComponent,{
      width: '500px', height: '500px', data: {
        abilities: abilities
      }
    })
  }

  openModalAtaques(moves: any) {
    let dialog = this.dialog.open(ModalAtaquesComponent,{
      width: '500px', height: '500px', data: {
        moves: moves
      }
    })
  }

  openModalJogos(game_indices: any) {
    let dialog = this.dialog.open(ModalJogosComponent,{
      width: '500px', height: '500px', data: {
        game_indices: game_indices
      }
    })
  }

  openModalAreaEncontro(location_area_encounters: any) {
    let dialog = this.dialog.open(ModalAreaEncontroComponent,{
      width: '500px', height: '500px', data: {
        location_area_encounters: location_area_encounters
      }
    })
  }
}
