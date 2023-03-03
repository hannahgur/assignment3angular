import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiEndpoint = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.apiEndpoint}/pokemon?limit=100`).pipe(
      map((response) => {
        return response.results.map((pokemon: any, index: number) => {
          console.log(pokemon);
          
          const id = index + 1;
  
          return { id, name: pokemon.name, pokemon: pokemon};
        });
      })
    );
  }
}
