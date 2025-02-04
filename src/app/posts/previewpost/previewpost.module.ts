import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewpostPageRoutingModule } from './previewpost-routing.module';

import { PreviewpostPage } from './previewpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewpostPageRoutingModule
  ],
  declarations: [PreviewpostPage]
})
export class PreviewpostPageModule {}
