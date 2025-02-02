import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TextPostComponent } from './text-post.component';


@NgModule({
  declarations: [TextPostComponent],
  imports: [
    CommonModule, FormsModule, IonicModule
  ],
  exports: [TextPostComponent]
})
export class TextPostModule { }







