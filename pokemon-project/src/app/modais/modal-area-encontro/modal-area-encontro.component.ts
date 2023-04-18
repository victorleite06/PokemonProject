import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-modal-area-encontro',
  templateUrl: './modal-area-encontro.component.html',
  styleUrls: ['./modal-area-encontro.component.css']
})
export class ModalAreaEncontroComponent implements OnInit {

  detalhesEncontro: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ModalAreaEncontroComponent>,
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.buscarDetalhesAreaEncontro()
  }

  buscarDetalhesAreaEncontro() {
    this.pokemonService.requisicaoPorURL(this.data.location_area_encounters).subscribe({
      next: res => {
        this.detalhesEncontro = res
      }
    })
  }

  tratarNome(nomeArea: string) {
    while(nomeArea.includes('-')) {
      nomeArea = nomeArea.replace('-', ' ')
    }
    nomeArea = nomeArea.replace('area', ' ')
    return nomeArea.substring(0, 1).toUpperCase() + nomeArea.substring(1)
  }
}
