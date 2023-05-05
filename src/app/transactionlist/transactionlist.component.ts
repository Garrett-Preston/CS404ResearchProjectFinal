import { Component, Input } from '@angular/core';
import { Transaction } from '../layoutgrid/layoutgrid.component';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent {
  @Input() transactions: Transaction[] = [
    { amount: 100, type: "deposit", memo: "test"},
    { amount: 100, type: "deposit", memo: "test"},
    { amount: 100, type: "deposit", memo: "test"},
    { amount: 100, type: "deposit", memo: "test"},
    { amount: 100, type: "deposit", memo: "test"},
  ]

}
