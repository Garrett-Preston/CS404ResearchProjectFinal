import { Component } from '@angular/core';

export interface Transaction {
  type: string;
  amount: number;
  date: Date;
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
}
