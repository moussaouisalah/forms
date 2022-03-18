import { Component, Input, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-forms-table',
  templateUrl: './forms-table.component.html',
  styleUrls: ['./forms-table.component.css'],
})
export class FormsTableComponent implements OnInit {
  @Input() forms?: Form[];

  constructor() {}

  ngOnInit(): void {}
}
