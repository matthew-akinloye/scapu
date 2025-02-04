import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiopostuploadPageRoutingModule } from './audiopostupload-routing.module';

import { AudiopostuploadPage } from './audiopostupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiopostuploadPageRoutingModule
  ],
  declarations: [AudiopostuploadPage]
})
export class AudiopostuploadPageModule {}
