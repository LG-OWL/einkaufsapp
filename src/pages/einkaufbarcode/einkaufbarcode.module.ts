import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EinkaufbarcodePage } from './einkaufbarcode';

@NgModule({
  declarations: [
    EinkaufbarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(EinkaufbarcodePage),
  ],
})
export class EinkaufbarcodePageModule {}
