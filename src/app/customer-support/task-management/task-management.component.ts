import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent implements OnInit {
  displayProgressSpinner = false;
  isDisableActivateBtn = true;
  isShowData = false;
  submitted = false;

  startDate: string = '';
  endDate: string = '';
  estStartDate: string = '';
  estEndDate: string = '';

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    this._snackBar.open('Update', 'Success', {
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      duration: 2000,
    });
  }
}
