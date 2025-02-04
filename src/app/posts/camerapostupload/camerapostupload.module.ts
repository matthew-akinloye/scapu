import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerapostuploadPageRoutingModule } from './camerapostupload-routing.module';

import { CamerapostuploadPage } from './camerapostupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerapostuploadPageRoutingModule
  ],
  declarations: [CamerapostuploadPage]
})
export class CamerapostuploadPageModule {}
