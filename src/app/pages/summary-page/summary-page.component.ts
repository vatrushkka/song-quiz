import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../shared/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  name: string;
  score: number;

  subName: Subscription;
  subScore: Subscription;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.subName = this.playerService.player$.subscribe(name => {
      this.name = name;
    })

    this.subScore = this.playerService.score$.subscribe(score => {
      this.score = score;
    })
  }

  playAgain(): void {
    this.playerService.startGame(this.name);

    this.router.navigate(['quiz']);
  }

  anotherPlayer(): void {
    this.playerService.playAnotherUser();
    this.router.navigate(['start']);
  }

  ngOnDestroy(): void {
    this.subName.unsubscribe();
    this.subScore.unsubscribe();
  }
}
