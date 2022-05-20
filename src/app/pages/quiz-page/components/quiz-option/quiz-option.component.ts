import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';
import { SongData } from '../../../../shared/models/SongData.model';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent implements OnInit {
  @Input() song: SongData;
  @Input() index: number;
  @Output() showSong = new EventEmitter;

  isAnswer: boolean;
  isClicked: boolean;
  answer: number;

  sub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.isClicked = false;
    this.dataService.correctAnswer$.pipe(first()).subscribe(correct => this.answer = correct);
    this.sub = this.dataService.isCorrectAnswer$.subscribe(isAnswer => this.isAnswer = isAnswer);
  }

  onCheck(): void {
    if (!this.isAnswer) {
      this.isClicked = true;
    }
    this.showSong.emit(this.index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
