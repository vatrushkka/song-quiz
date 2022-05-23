import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenreData } from '../../../../shared/models/GenreData.model';
import { DataService } from '../../../../shared/services/data.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() tab: number;
  @Output() answered = new EventEmitter();
  @Output() showSong = new EventEmitter();

  data: GenreData[];
  activeTab: number;
  answer: number;
  isCorrectAnswer: boolean;

  activeTabSub: Subscription;
  answerSub: Subscription;
  isAnswerSub: Subscription;
  dataSub: Subscription;

  dataLoading = new BehaviorSubject<boolean>(false);

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataLoading.next(true);
    this.activeTabSub = this.dataService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
      this.dataLoading.next(false);
    });

    this.dataSub = this.dataService.data$.subscribe(data => {
      this.data = data;
    });

    this.answerSub = this.dataService.correctAnswer$.subscribe(answer => {
      this.answer = answer;
    });

    this.isAnswerSub = this.dataService.isCorrectAnswer$.subscribe(val => {
      this.isCorrectAnswer = val;
    });
  }

  onCheckAnswer(index: number): void {
    if (this.answer === index && !this.isCorrectAnswer) {
      this.dataService.switchIsAnswer(!this.isCorrectAnswer);
      this.answered.emit();
    }
  }

  onShowSong($event): void {
    this.showSong.emit($event);
  }

  ngOnDestroy(): void {
    this.activeTabSub.unsubscribe();
    this.answerSub.unsubscribe();
    this.dataSub.unsubscribe();
  }
}
