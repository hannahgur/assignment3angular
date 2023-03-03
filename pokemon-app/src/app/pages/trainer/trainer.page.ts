import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css'],
})
export class TrainerPage implements OnInit {
  pokemon: string[] = [];
  public trainer: Trainer | undefined;
  catchedPokemons: any[] = [];
  selectedPokemon: any;

  constructor(
    private http: HttpClient,
    private trainerService: TrainerService
  ) {}

  sessionData: any = sessionStorage.getItem('pokemon-trainer');
  dataObject = JSON.parse(this.sessionData);
  id = this.dataObject.id;

  showPokemonDetails(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  public ngOnInit(): void {
    this.trainerService.getTrainerById(this.id).subscribe((trainer) => {
      this.trainer = trainer;

      // Extract the pokemon objects from the nested array returned by the API
      const newPokemons = trainer.pokemon[0].map((p: any) => {
        return {
          id: p.id,
          ...p.pokemon,
        };
      });

      // Add the new pokemon objects to the existing array
      this.catchedPokemons.push(...newPokemons);

      console.log(this.catchedPokemons);
    });
  }
}
