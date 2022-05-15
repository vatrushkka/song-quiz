import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/Player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _player$ = new BehaviorSubject<Player | null>(null);
  player$ = this._player$.asObservable();

  constructor() {}

  login(name: string): void {
    this._player$.next({name, score: 0});
    console.log(name);
  }

  isPlayer(): boolean {
    return true;
  }

  // logout() {
  // }
}
