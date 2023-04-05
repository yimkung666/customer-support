import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss'],
})
export class CustomerReportComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    detail: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
    ],
    email: ['', [Validators.required, Validators.email]],
  });

  displayProgressSpinner = false;
  isDisableActivateBtn = true;
  isShowData = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      detail: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      this._snackBar.open('Create', 'Success', {
        verticalPosition: 'top' as MatSnackBarVerticalPosition,
        duration: 2000,
      });
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
