import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage implements OnInit{

  get getTrainer(): Trainer | undefined {
    return this.trainerService.getTrainer
  }

  get pokemon(): any[] {
    if (this.trainerService.getTrainer) {
      return this.trainerService.getTrainer.pokemon
    }
    return []
  }

  constructor (
    private trainerService: TrainerService
  ) {}


  ngOnInit(): void {
    
  }
}
