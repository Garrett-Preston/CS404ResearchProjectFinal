import { Component } from '@angular/core';

export interface Transaction {
  type: string;
  amount: number;
  memo: string;
}

@Component({
  selector: 'app-layoutgrid',
  templateUrl: './layoutgrid.component.html',
  styleUrls: ['./layoutgrid.component.css']
})
export class LayoutgridComponent {
  accountBalance: number = 1000
  // This will eventually store transaction history card info once I figure it out
   transactions: Transaction[] = [

  ]

  addTransaction(newTransaction: Transaction) {
    console.log(newTransaction);
    if (newTransaction.type == "deposit") {
      console.log("deposit")
      this.accountBalance += newTransaction.amount
    }
    else {
      console.log("withdraw")
      this.accountBalance -= newTransaction.amount
    }
    this.transactions.push(newTransaction);
    console.log(this.transactions)
  }
}
