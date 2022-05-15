import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../shared/services/player.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  player$ = this.playerService.player$;
  score: number;

  scoreSub: Subscription;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.setUser();
    this.scoreSub = this.playerService.score$.subscribe(val => {
      this.score = val;
    })
  }

  setUser(): void {
    this.playerService.startGame('name')
  }

  onAddPoints(): void {
    let points = this.score + 2;

    this.playerService.addPoints(points)
  }

  nextPage(): void {
    this.router.navigate(['summary'])
  }

  ngOnDestroy(): void {
    this.scoreSub.unsubscribe();
  }
}
