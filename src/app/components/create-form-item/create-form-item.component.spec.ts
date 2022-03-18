import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormItemComponent } from './create-form-item.component';

describe('CreateFormItemComponent', () => {
  let component: CreateFormItemComponent;
  let fixture: ComponentFixture<CreateFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
