import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from '../../shared/services/player.service';
import { Router } from '@angular/router';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  quizForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  startQuiz(name): void {
    this.playerService.startGame(name);
    this.dataService.setActiveTab(1);
    this.router.navigate(['/quiz']);
  }
}
