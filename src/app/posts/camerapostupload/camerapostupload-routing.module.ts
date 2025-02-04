import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerapostuploadPage } from './camerapostupload.page';

const routes: Routes = [
  {
    path: '',
    component: CamerapostuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamerapostuploadPageRoutingModule {}
