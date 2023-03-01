import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainerService } from '../services/trainer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.trainerService.getTrainer) {
      return true
    }
    else {
      this.router.navigateByUrl("/login")
      return false
    }
  }

}
