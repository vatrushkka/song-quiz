import { Component, Input, OnInit } from '@angular/core';
import { SongData } from '../../../../shared/models/SongData.model';
import { environment } from '../../../../../environments/environment.prod';
import { DataService } from '../../../../shared/services/data.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent implements OnInit {
  @Input() song: SongData;
  @Input() bgImg = false;


  playing = false;
  songLength = 30;
  currentLength = 0;
  currentProgress = 100 / this.songLength * this.currentLength;
  isAnswer: boolean;
  environment = environment;

  value: FormControl;

  answerSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.value = new FormControl(this.currentLength);

    console.log(this.currentProgress);
    this.answerSub = this.dataService.isCorrectAnswer$.subscribe(val => this.isAnswer = val);

    this.value.valueChanges.subscribe(val => {
      this.currentProgress = 100 / this.songLength * val;
    });
  }

  togglePlaying(): void {
    this.playing = !this.playing;
  }

  ngOnDestroy(): void {
    this.answerSub.unsubscribe();
  }
}
