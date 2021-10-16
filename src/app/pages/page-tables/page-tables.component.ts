import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-tables',
  templateUrl: './page-tables.component.html',
  styleUrls: ['./page-tables.component.sass']
})
export class PageTablesComponent implements OnInit {

  invoiceTable = {
    headers: ['client', 'issued date', 'due date', 'amount', 'status'],
    users: [
      ['maria', 'Aug 10', 'in 2 days', 3400, 'pending'],
      ['diane', 'Aug 15', 'in 2 days', 3000, 'pending'],
      ['step', 'Sep 10', 'in 2 days', 400, 'overdue'],
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
