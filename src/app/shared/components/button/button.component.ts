import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() disabled = false;
  @Output() startQuiz = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStart($event): void {
    this.startQuiz.emit($event);
  }
}
