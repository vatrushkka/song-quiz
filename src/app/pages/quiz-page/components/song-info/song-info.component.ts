import { Component, Input, OnInit}  from '@angular/core';
import { SongData } from '../../../../shared/models/SongData.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {
  @Input() song: SongData;
  @Input() position: number;

  environment = environment;

  constructor() { }

  ngOnInit(): void {
  }
}
