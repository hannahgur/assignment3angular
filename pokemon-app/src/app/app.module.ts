import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { LandingPage } from './pages/landing/landing.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';

import { CataloguePokeElemComponent } from './components/catalogue-poke-elem/catalogue-poke-elem.component';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';
import { CataloguePokeListComponent } from './components/catalogue-poke-list/catalogue-poke-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    PokemonCataloguePage,
    TrainerPage,
    LoginFormComponent,
    CataloguePokeElemComponent,
    PokemoncardComponent,
    CataloguePokeListComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
