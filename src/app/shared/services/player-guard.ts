import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PlayerService } from './player.service';

@Injectable()
export class PlayerGuard implements CanActivate {

  constructor(public playerService: PlayerService, public router: Router) {}

  canActivate(): boolean {
    if (!this.playerService.isPlayer()) {
      this.router.navigate(['start']);
      return false;
    }
    return true;
  }
}
