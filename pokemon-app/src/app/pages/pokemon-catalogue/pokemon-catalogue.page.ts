import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit {
  pokemonList: any[] = [];

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.catalogueService.getPokemonList().subscribe(data => {
      console.log(data.results);
      
      this.pokemonList = data.results;
    });
  }
}