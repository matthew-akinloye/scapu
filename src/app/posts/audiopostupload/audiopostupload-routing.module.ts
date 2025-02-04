import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiopostuploadPage } from './audiopostupload.page';

const routes: Routes = [
  {
    path: '',
    component: AudiopostuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiopostuploadPageRoutingModule {}
