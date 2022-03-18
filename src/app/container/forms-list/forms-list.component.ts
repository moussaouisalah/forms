import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/forms.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css'],
})
export class FormsListComponent implements OnInit {
  isLoading: boolean = true;
  hasError: boolean = false;
  forms?: Form[];

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.formsService.getForms().subscribe({
      next: (forms) => {
        this.forms = forms;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.hasError = true;
      },
    });
  }
}
