import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormComponent } from './container/answer-form/answer-form.component';
import { CreateFormComponent } from './container/create-form/create-form.component';
import { FormComponent } from './container/form/form.component';
import { FormsListComponent } from './container/forms-list/forms-list.component';
import { HomeComponent } from './container/home/home.component';

export const PATHS = {
  CREATE_FORM: 'forms/new',
  ANSWER_FORM: 'forms/:id/answer',
  FORM: 'forms/:id',
  FORMS: 'forms',
};

const routes: Routes = [
  { path: PATHS.CREATE_FORM, component: CreateFormComponent },
  { path: PATHS.ANSWER_FORM, component: AnswerFormComponent },
  { path: PATHS.FORM, component: FormComponent },
  { path: PATHS.FORMS, component: FormsListComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
