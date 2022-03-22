import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/forms.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit, OnDestroy {
  form?: FormGroup;
  isSubmitting: boolean = false;

  createFormSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private formsService: FormsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      creator: ['', Validators.required],
      items: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  ngOnDestroy(): void {
    this.createFormSubscription?.unsubscribe();
  }

  get items(): FormArray {
    return this.form?.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(this.fb.control('', Validators.required));
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    if (this.form?.invalid) {
      return;
    }
    this.isSubmitting = true;
    this.createFormSubscription = this.formsService
      .createForm(this.form?.value)
      .subscribe((form) => {
        this.router.navigate([`/forms/${form.id}`]);
      });
  }
}
