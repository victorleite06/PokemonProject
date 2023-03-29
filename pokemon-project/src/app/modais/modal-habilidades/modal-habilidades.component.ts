import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {

  detalhesHabilidades: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<ModalHabilidadesComponent>,
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.buscarDetalhesHabilidades(this.data.abilities, 0)
  }

  buscarDetalhesHabilidades(abilities: any, cont: number) {
    this.pokemonService.requisicaoPorURL(abilities[cont].ability.url).subscribe({
      next: res => {
        this.detalhesHabilidades.push(res)
        if(abilities[cont + 1]) {
          this.buscarDetalhesHabilidades(abilities, cont + 1)
        }
        console.log(this.detalhesHabilidades)
      }
    })
  }

  tratarNome(name: string) {
    return name.substring(0, 1).toUpperCase() + name.substring(1)
  }
}
