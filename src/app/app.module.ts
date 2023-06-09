import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutgridComponent } from './layoutgrid/layoutgrid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { TransactiondiaglogDialog, TransactiondialogComponent } from './transactiondialog/transactiondialog.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component'

@NgModule({
  declarations: [
    AppComponent,
    AccountBalanceComponent,
    LayoutgridComponent,
    TransactiondialogComponent,
    TransactiondiaglogDialog,
    TransactionlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TransactiondiaglogDialog]
})
export class AppModule { }
