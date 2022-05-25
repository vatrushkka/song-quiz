import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenreData } from '../../../../shared/models/GenreData.model';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() data: GenreData[];

  activeTab: number;
  tabsAmount: number;
  currentWidth: number;
  width = 0;
  answered = false;

  activeTabSub: Subscription;
  tabsAmountSub: Subscription;
  answerSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tabsAmountSub = this.dataService.tabsAmount$.subscribe(amount => {
      this.tabsAmount = amount;
    });

    this.activeTabSub = this.dataService.activeTab$.subscribe(tabId => {
      this.activeTab = tabId;
      if (this.tabsAmount == this.activeTab) {
        this.currentWidth = 100;
      } else {
        this.currentWidth = 100 / (this.tabsAmount * 6 - 3) * (this.activeTab * 6);
      }
    });

    this.answerSub = this.dataService.isCorrectAnswer$.subscribe(val => {
      if (val) {
        this.width = this.currentWidth;
      }
      this.answered = val;
    });
  }

  ngOnDestroy(): void {
    this.tabsAmountSub.unsubscribe();
    this.activeTabSub.unsubscribe();
    this.answerSub.unsubscribe();
  }
}
