import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../shared/services/player.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { GenreData } from '../../shared/models/GenreData.model';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {
  score: number;
  data: GenreData[];
  activeTab: number;

  activeSong = -1;
  isAnswer = false;
  questionScore = 4;

  scoreSub: Subscription;
  dataSub: Subscription;
  activeTabSub: Subscription;

  dataLoader = new BehaviorSubject<boolean>(false);

  constructor(private playerService: PlayerService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.questionScore = 4;
    this.dataLoader.next(true);

    this.dataService.setActiveTab(1);

    this.scoreSub = this.playerService.score$.subscribe(val => {
      this.score = val;
    });

    this.activeTabSub = this.dataService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });

    this.dataSub = this.dataService.getData().subscribe(data => {
      this.dataService.setData(data);
      this.data = data;
      this.dataLoader.next(false);
    });
  }

  onAddPoints(questionPoints): void {
    let points = this.score + questionPoints;

    this.playerService.addPoints(points);
  }

  changeButton(): void {
    if (!this.isAnswer) {
      this.onAddPoints(this.questionScore);
    }
    this.isAnswer = !this.isAnswer;
  }

  nextQuestion(): void {
    if (this.activeTab === 4) {
      this.router.navigate(['summary']);
    } else {
      this.changeButton();
      this.dataService.setActiveTab(this.activeTab + 1);
      this.dataService.setCorrectAnswer();
      this.activeSong = -1;
      this.questionScore = 4;
    }
    this.dataService.switchIsAnswer(false);
  }

  setSong($event): void {
    this.activeSong = $event;
  }

  setScore(): void {
    if (!this.isAnswer) {
      this.questionScore -= 1;
    }
  }

  ngOnDestroy(): void {
    this.scoreSub.unsubscribe();
    this.activeTabSub.unsubscribe();
    this.dataSub.unsubscribe();
  }
}
