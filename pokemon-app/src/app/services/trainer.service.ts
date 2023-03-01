import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private trainer?: Trainer

  public get getTrainer(): Trainer | undefined {
    return this.trainer
  }

  public set setTrainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!)
    this.trainer = trainer
  }

  constructor() {
    this.trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }

}
