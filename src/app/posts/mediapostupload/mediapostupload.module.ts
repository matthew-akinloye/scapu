import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediapostuploadPageRoutingModule } from './mediapostupload-routing.module';

import { MediapostuploadPage } from './mediapostupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediapostuploadPageRoutingModule
  ],
  declarations: [MediapostuploadPage]
})
export class MediapostuploadPageModule {}
