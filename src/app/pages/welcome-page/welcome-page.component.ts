import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  quizForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
