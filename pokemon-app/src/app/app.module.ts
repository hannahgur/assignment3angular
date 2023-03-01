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

import { CatalogueNavComponent } from './components/catalogue-nav/catalogue-nav.component';
import { CataloguePokeElemComponent } from './components/catalogue-poke-elem/catalogue-poke-elem.component';
import { LandingPage } from './pages/landing/landing.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    PokemonCataloguePage,
    TrainerPage,
    LoginFormComponent,
    CatalogueNavComponent,
    CataloguePokeElemComponent
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
