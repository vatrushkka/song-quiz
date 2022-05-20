import { Component, Input, OnInit } from '@angular/core';
import { SongData } from '../../../../shared/models/SongData.model';
import { environment } from '../../../../../environments/environment.prod';
import { DataService } from '../../../../shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent implements OnInit {
  @Input() song: SongData;
  @Input() bgImg = false;

  isAnswer: boolean;
  environment = environment;

  answerSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.answerSub = this.dataService.isCorrectAnswer$.subscribe(val => this.isAnswer = val);
  }

  ngOnDestroy(): void {
    this.answerSub.unsubscribe();
  }
}
