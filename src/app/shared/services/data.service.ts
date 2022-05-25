import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenreData } from '../models/GenreData.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _data$ = new BehaviorSubject<GenreData[] | null>(null);
  data$ = this._data$;

  private _tabsAmount$ = new BehaviorSubject<number>(0);
  tabsAmount$ = this._tabsAmount$.asObservable();

  private _activeTab$ = new BehaviorSubject<number>(1);
  activeTab$ = this._activeTab$.asObservable();

  private _correctAnswer$ = new BehaviorSubject<number>(Math.floor(Math.random() * 4) + 1);
  correctAnswer$ = this._correctAnswer$.asObservable();

  private _isCorrectAnswer$ = new BehaviorSubject<boolean>(false);
  isCorrectAnswer$ = this._isCorrectAnswer$.asObservable();

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<GenreData[]>('https://levi9-song-quiz.herokuapp.com/api/data');
  }

  setData(data: GenreData[]): void {
    this._data$.next(data);
    this._tabsAmount$.next(data.length)
  }

  setCorrectAnswer() {
    let answer = Math.floor(Math.random() * 4) + 1;
    this._correctAnswer$.next(answer);
  }

  switchIsAnswer(newIsAnswer) {
    this._isCorrectAnswer$.next(newIsAnswer);
  }

  setActiveTab(id: number): void {
    this._activeTab$.next(id);
  }
}
