import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

const { apiTrainers } = environment

// Service for managing pokemon trainer data
@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private trainer?: Trainer;

  public get getTrainer(): Trainer | undefined {
    return this.trainer;
  }

  public set setTrainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this.trainer = trainer;
  }

  constructor(private http: HttpClient) {
    this.trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }

  apiKey = environment.apiKey;
  apiEndpoint = environment.apiTrainers;
  
  // Retrieves a trainer by their ID from the API
  public getTrainerById(id: number): Observable<Trainer> {
    const url = `${apiTrainers}/${id}`;
    return this.http.get<Trainer>(url);
  }
}
