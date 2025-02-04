import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewpostPage } from './previewpost.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewpostPageRoutingModule {}
