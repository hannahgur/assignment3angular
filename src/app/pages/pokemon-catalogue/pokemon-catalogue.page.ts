import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatalogueService } from '../../services/catalogue.service';
import { environment } from 'src/environments/environment.development';

const { apiKey, apiTrainers } = environment 


// Pokemon catalogue page
@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css'],
})
export class PokemonCataloguePage implements OnInit {
  pokemonList: any[] = [];
  items: any[] = [];
  searchQuery: string = '';
  apiKey = environment.apiKey;
  flippedCardIds: number[] = [];

  isFlipped = false;

  constructor(
    private http: HttpClient,
    private catalogueService: CatalogueService
  ) {}

  ngOnInit(): void {
    this.catalogueService.getPokemonList().subscribe((data) => {
      this.pokemonList = data;
    });
  }


  // Handle a card being clicked
  onCardClick(id: number) {
    const index = this.flippedCardIds.indexOf(id);
    if (index > -1) {
      this.flippedCardIds.splice(index, 1);
    } else {
      this.flippedCardIds.push(id);
    }
  }


  // Handle the trainer trying to catch the selected pokemon
  catchPokemon() {
    
    const sessionData: any = sessionStorage.getItem('pokemon-trainer');
    const dataObject = JSON.parse(sessionData);
    const id = dataObject.id;

    fetch(`${apiTrainers}/${id}`, {
      method: 'PATCH',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pokemon: [this.items],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not update caught pokemons');
        }
        return response.json();
      })
      .then((updatedUser) => {
        console.log(updatedUser);
      })
      .catch((error) => {});

    this.items = [];
  }

  // Update the array of selected pokemon
  updateItem(item: any) {
    const index = this.items.findIndex((pokemon) => pokemon.id === item.id);
    if (index > -1) {
      // If the pokemon is already in the items array, remove it
      this.items.splice(index, 1);
      this.flippedCardIds = this.flippedCardIds.filter((id) => id !== item.id);
    } else {
      // Otherwise, add the pokemon to the items array
      this.items.push(item);
      this.flippedCardIds.push(item.id);
    }
  }


  // Remove a pokemon from the list of selected
  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  get filledClasses() {
    return this.items.reduce((result, item) => {
      result[item.id] = 'filled';
      return result;
    }, {});
  }

  get filteredPokemonList(): any[] {
    if (!this.searchQuery) {
      return this.pokemonList;
    }

    return this.pokemonList.filter((pokemon) =>
      pokemon.pokemon.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
    );
  }
}
