import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/forms.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css'],
})
export class FormsListComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  hasError: boolean = false;
  forms?: Form[];

  formsSubscription?: Subscription;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.formsSubscription = this.formsService.getForms().subscribe({
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

  ngOnDestroy(): void {
    this.formsSubscription?.unsubscribe();
  }
}
