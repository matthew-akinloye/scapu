import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextpostuploadPage } from './textpostupload.page';

const routes: Routes = [
  {
    path: '',
    component: TextpostuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextpostuploadPageRoutingModule {}
