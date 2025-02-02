import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MediaPostComponent } from './media-post.component';


@NgModule({
  declarations: [MediaPostComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ],
  exports: [MediaPostComponent]
})
export class MediaPostModule { }







