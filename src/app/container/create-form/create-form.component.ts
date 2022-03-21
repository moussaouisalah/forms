import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/forms.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  form?: FormGroup;
  isSubmitting: boolean = false;
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
    this.formsService.createForm(this.form?.value).subscribe((form) => {
      this.router.navigate([`/forms/${form.id}`]);
    });
  }
}
