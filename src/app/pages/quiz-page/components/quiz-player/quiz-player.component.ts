import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SongData } from '../../../../shared/models/SongData.model';
import { environment } from '../../../../../environments/environment.prod';
import { DataService } from '../../../../shared/services/data.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AudioModel } from '../../models/audio.model';
import * as moment from 'moment';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent implements OnInit {
  @Input() song: SongData;
  @Input() bgImg = false;

  data;

  audioObj = new Audio();

  songSrc: string;
  audioEvents = [
    'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay', 'loadedmetadata', 'loadstart'
  ];

  state: AudioModel = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  };

  stateChange: BehaviorSubject<AudioModel> = new BehaviorSubject(this.state);

  isAnswer: boolean;
  environment = environment;

  value: FormControl;

  dataSub: Subscription;
  answerSub: Subscription;
  audioSub: Subscription;
  stateSub: Subscription;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {


    this.dataSub = this.dataService.data$.subscribe(data => {
      this.data = data;
    });

    // console.log(this.song.name);
    this.value = new FormControl(this.state.currentTime);
    this.songSrc = environment.songPath + this.song.audio;

    this.answerSub = this.dataService.isCorrectAnswer$.subscribe(val => this.isAnswer = val);

    this.audioSub = this.streamObservable(this.songSrc).subscribe();

    this.stateSub = this.getState().subscribe(states => {
      this.state = states;
    });

    this.value.valueChanges.subscribe(val => {
      this.seekTo(val);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.songSrc = environment.songPath + changes.song.currentValue.audio;
    this.state.playing = false;
    this.audioSub = this.streamObservable(this.songSrc).subscribe();
  }

  private streamObservable(url) {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioObj, this.audioEvents, handler);
        // reset state
        this.resetState();
      };
    });
  }

  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  formatTime(time: number, format: string = 'mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  }

  togglePlaying(): void {
    if (this.state.playing) {
      this.pause();
    } else {
      this.play();
    }

    this.state.playing = !this.state.playing;
  }

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true;
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case 'timeupdate':
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;
      case 'error':
        this.resetState();
        this.state.error = true;
        break;
    }
    this.stateChange.next(this.state);
  }

  getState(): Observable<AudioModel> {
    return this.stateChange.asObservable();
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.answerSub.unsubscribe();
    this.audioSub.unsubscribe();
    this.stateSub.unsubscribe();
  }
}
