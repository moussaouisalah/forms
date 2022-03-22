import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/forms.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
})
export class AnswerFormComponent implements OnInit, OnDestroy {
  form?: Form;
  answers?: FormGroup;
  isLoading: boolean = true;
  hasError: boolean = false;
  isSubmitting: boolean = false;

  formSubscription?: Subscription;
  createAnswerSubscription?: Subscription;

  constructor(
    private formsService: FormsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formSubscription = this.formsService.getForm(id).subscribe({
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

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
    this.createAnswerSubscription?.unsubscribe();
  }

  get items(): FormArray {
    return this.answers?.get('items') as FormArray;
  }

  createAnswerForm() {
    this.answers = this.fb.group({
      creator: ['', Validators.required],
      items: this.fb.array(
        this.form!.items.map((_) => this.fb.control('', Validators.required))
      ),
    });
  }

  onSubmit() {
    this.isSubmitting = true;
    this.createAnswerSubscription = this.formsService
      .createAnswer(this.form!, this.answers?.value)
      .subscribe(() => {
        this.router.navigate([`/forms/${this.form!.id}`]);
      });
  }
}
