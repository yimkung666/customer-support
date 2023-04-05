import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '../components/dialogs/confirm/confirm-dialog-data';
import { ConfirmComponent } from '../components/dialogs/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar,) { }

  open(message: string, action: string, duration?: number) {
    let options = {
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      duration: 5000
    };

    this._snackBar.open(message, action, options);
  }
}
