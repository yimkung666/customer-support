import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomerSupportRoutingModule } from './customer-support-routing.module';
import { TaskManagementComponent } from './task-management/task-management.component';

@NgModule({
  declarations: [
    CustomerReportComponent,
    TaskManagementComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerSupportRoutingModule,
    SharedModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class CustomerSupportModule { }
