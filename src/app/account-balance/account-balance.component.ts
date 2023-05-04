import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})

export class AccountBalanceComponent {
  @Input() accountBalance: number = 0
}
