import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from 'src/app/forms.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isLoading: boolean = true;
  hasError: boolean = false;
  form?: Form;

  constructor(
    private route: ActivatedRoute,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formsService.getForm(id).subscribe({
      next: (form) => {
        this.form = form;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.hasError = true;
      },
    });
  }
}
