import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-poke-list',
  templateUrl: './catalogue-poke-list.component.html',
  styleUrls: ['./catalogue-poke-list.component.css']
})
export class CataloguePokeListComponent implements OnInit {

  @Input() pokemons: any[] = [];
  
  constructor() {}

  ngOnInit(): void {
    
  }


}
