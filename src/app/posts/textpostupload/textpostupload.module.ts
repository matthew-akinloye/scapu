import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextpostuploadPageRoutingModule } from './textpostupload-routing.module';

import { TextpostuploadPage } from './textpostupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextpostuploadPageRoutingModule
  ],
  declarations: [TextpostuploadPage]
})
export class TextpostuploadPageModule {}
