import { Component, Input, OnInit } from '@angular/core';

export interface BreadcrumbsItem {
  label: string;
  url?: string;
  isCurrent?: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items!: BreadcrumbsItem[];

  constructor() {}

  ngOnInit(): void {}
}
