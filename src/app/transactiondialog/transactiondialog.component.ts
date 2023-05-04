import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Transaction } from '../layoutgrid/layoutgrid.component';

@Component({
  selector: 'app-transactiondialog',
  templateUrl: './transactiondialog.component.html',
  styleUrls: ['./transactiondialog.component.css']
})
export class TransactiondialogComponent {
  // Store to output to parent component (the App/layout)
  @Output() dataEvent = new EventEmitter<Transaction>();

  // Function for outputting the data when it updates
  newTransaction(data: Transaction) {
    this.dataEvent.emit(data)
  }

  // Constructor
  constructor(public dialog: MatDialog) { }

  // Script for opening dialog. Defaults values and sets some config stuff
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(TransactiondiaglogDialog, {
      data: {
        isDeposit: null,
        amount: 100,
        memo: ""
      },
      width: '30%',
      height: '75%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    // This is called once the dialog is closed
    // here we just save the form data and log it
    dialogRef.afterClosed().subscribe(result => {
      // Call the emitter function to pass data upwards
      this.newTransaction(result)
      console.log('the dialog was closed: ', result);
    });
  }
}

@Component({
  selector: 'transactiondialog-dialog',
  templateUrl: './transactiondialog-dialog.html',
  styleUrls: ['./transactiondialog.component.css']
})
export class TransactiondiaglogDialog {

  // Constructor that takes defaults from parent and we can use the object to send data back
  constructor(
    private dialogRef: MatDialogRef<TransactiondiaglogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction) {}

  // Simple method for closing the dialog on cancel (Material has a special attribute for closing + sending data)
  close() {
    this.dialogRef.close();
  }
}
