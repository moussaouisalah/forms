import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/forms.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
})
export class AnswerFormComponent implements OnInit {
  form?: Form;
  answers?: FormGroup;
  isLoading: boolean = true;
  hasError: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private formsService: FormsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formsService.getForm(id).subscribe({
      next: (form) => {
        this.form = form;
        this.createAnswerForm();
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.hasError = true;
      },
    });
  }

  get items(): FormArray {
    return this.answers?.get('items') as FormArray;
  }

  createAnswerForm() {
    this.answers = this.fb.group({
      creator: '',
      items: this.fb.array(this.form!.items.map((_) => this.fb.control(''))),
    });
  }

  onSubmit() {
    this.isSubmitting = true;
    this.formsService
      .createAnswer(this.form!, this.answers?.value)
      .subscribe(() => {
        this.router.navigate([`/forms/${this.form!.id}`]);
      });
  }
}
