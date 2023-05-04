import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutgridComponent } from './layoutgrid/layoutgrid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TransactiondiaglogDialog, TransactiondialogComponent } from './transactiondialog/transactiondialog.component'

@NgModule({
  declarations: [
    AppComponent,
    AccountBalanceComponent,
    LayoutgridComponent,
    TransactiondialogComponent,
    TransactiondiaglogDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
