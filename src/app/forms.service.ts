import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './models/answer';
import { Form } from './models/form';

const BASE_URL = 'http://localhost:3000/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private http: HttpClient) {}

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(BASE_URL);
  }

  getForm(id: number): Observable<Form> {
    return this.http.get<Form>(`${BASE_URL}/${id}`);
  }

  createForm(form: Form): Observable<Form> {
    return this.http.post<Form>(BASE_URL, form);
  }

  createAnswer(form: Form, answer: Answer): Observable<Form> {
    return this.http.put<Form>(`${BASE_URL}/${form.id}`, {
      ...form,
      answers: [...form.answers, answer],
    });
  }
}
