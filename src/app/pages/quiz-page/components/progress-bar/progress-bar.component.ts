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

  sub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.activeTab$.subscribe(tabId => {
      this.activeTab = tabId;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
