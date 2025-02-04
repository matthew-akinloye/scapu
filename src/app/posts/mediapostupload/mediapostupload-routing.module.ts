import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediapostuploadPage } from './mediapostupload.page';

const routes: Routes = [
  {
    path: '',
    component: MediapostuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediapostuploadPageRoutingModule {}
