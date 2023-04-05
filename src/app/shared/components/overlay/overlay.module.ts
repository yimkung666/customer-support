import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { OverlayService, AppOverlayConfig } from '../../services/overlay.service';
export { OverlayService, AppOverlayConfig } from '../../services/overlay.service';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [OverlayService],
})
export class AppOverlayModule { }