import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transactiondialog',
  templateUrl: './transactiondialog.component.html',
  styleUrls: ['./transactiondialog.component.css']
})
export class TransactiondialogComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(TransactiondiaglogDialog, {
      width: '25%',
      height: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}

@Component({
  selector: 'transactiondialog-dialog',
  templateUrl: './transactiondialog-dialog.html',
  styleUrls: ['./transactiondialog.component.css']
})
export class TransactiondiaglogDialog{

  constructor(public dialogRef: MatDialogRef<TransactiondiaglogDialog>) {}

  close() {
    this.dialogRef.close();
  }
}
