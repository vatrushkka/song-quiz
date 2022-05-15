import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/Player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  // somePlayer = {name: 'player', score: 0}
  isPlayer = true;

  private _score$ = new BehaviorSubject<number>(0)
  private _name$ = new BehaviorSubject<string | null>(null)
  // private _player$ = new BehaviorSubject<Player | null>(this.somePlayer);
  // private _player$ = new BehaviorSubject<Player | null>(null);
  player$ = this._name$.asObservable();
  score$ = this._score$.asObservable();

  constructor() {}

  startGame(name: string): void {
    this._name$.next(name);
    this._score$.next(0);
    this.isPlayer = true;
  }

  addPoints(points: number): void {
    this._score$.next(points);
  }

  playAnotherUser(): void {
    this._name$.next(null);
    this._score$.next(0);
  }

  // logout() {
  // }
}
