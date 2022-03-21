import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {
  @Input() formControlName!: string;
  @Input() isInvalid!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
