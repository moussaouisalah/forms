import { Component, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.css'],
})
export class FormAnswerComponent implements OnInit {
  @Input() answer!: Answer;
  isExpanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
