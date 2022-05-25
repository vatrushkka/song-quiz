import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../shared/services/player.service';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {
  name: string;
  score: number;
  tabsAmount: number;

  subName: Subscription;
  subScore: Subscription;
  tabsSub: Subscription;

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subName = this.playerService.player$.subscribe(name => {
      this.name = name;
    });

    this.subScore = this.playerService.score$.subscribe(score => {
      this.score = score;
    });

    this.tabsSub = this.dataService.tabsAmount$.subscribe(amount => {
      this.tabsAmount = amount;
    });
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
    this.tabsSub.unsubscribe();
  }
}
