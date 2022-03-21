import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { FormsListComponent } from './container/forms-list/forms-list.component';
import { CreateFormComponent } from './container/create-form/create-form.component';
import { FormComponent } from './container/form/form.component';
import { AnswerFormComponent } from './container/answer-form/answer-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsTableComponent } from './components/forms-table/forms-table.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CreateFormItemComponent } from './components/create-form-item/create-form-item.component';
import { FormAnswerComponent } from './components/form-answer/form-answer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsListComponent,
    CreateFormComponent,
    FormComponent,
    AnswerFormComponent,
    NavbarComponent,
    FormsTableComponent,
    BreadcrumbsComponent,
    CreateFormItemComponent,
    FormAnswerComponent,
    SpinnerComponent,
    FormControlComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
