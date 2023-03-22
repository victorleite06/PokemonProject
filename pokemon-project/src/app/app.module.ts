import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HomeComponent } from './components/home/home.component';
import { DetalhesPokemonComponent } from './components/detalhes-pokemon/detalhes-pokemon.component';
import { ModalHabilidadesComponent } from './modais/modal-habilidades/modal-habilidades.component';
import { ModalAtaquesComponent } from './modais/modal-ataques/modal-ataques.component';
import { ModalJogosComponent } from './modais/modal-jogos/modal-jogos.component';
import { ModalAreaEncontroComponent } from './modais/modal-area-encontro/modal-area-encontro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesPokemonComponent,
    ModalHabilidadesComponent,
    ModalAtaquesComponent,
    ModalJogosComponent,
    ModalAreaEncontroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
