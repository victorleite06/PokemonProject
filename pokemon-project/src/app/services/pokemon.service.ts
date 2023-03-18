import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  urlBase = 'https://pokeapi.co/api/v2'
  images = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

  buscarTodosPokemons(): Observable<any> {
    return this.http.get<any>(`${this.urlBase}/pokemon/?limit=10271`)
  }

  urlImagem(idPokemon: any) {
    return `${this.images}/${idPokemon}.png`
  }
}
