import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { TaskManagementComponent } from './task-management/task-management.component';

const routes: Routes = [
  { path: 'customer-support/report', component: CustomerReportComponent },
  { path: 'customer-support/task', component: TaskManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSupportRoutingModule {}
