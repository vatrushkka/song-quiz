import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name$ = this.playerService.player$
  score$ = this.playerService.score$

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
