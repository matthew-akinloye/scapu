import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'textpostupload',
    loadChildren: () => import('./posts/textpostupload/textpostupload.module').then( m => m.TextpostuploadPageModule)
  },
  {
    path: 'audiopostupload',
    loadChildren: () => import('./posts/audiopostupload/audiopostupload.module').then( m => m.AudiopostuploadPageModule)
  },
  {
    path: 'mediapostupload',
    loadChildren: () => import('./posts/mediapostupload/mediapostupload.module').then( m => m.MediapostuploadPageModule)
  },
  {
    path: 'camerapostupload',
    loadChildren: () => import('./posts/camerapostupload/camerapostupload.module').then( m => m.CamerapostuploadPageModule)
  },
  {
    path: 'previewpost',
    loadChildren: () => import('./posts/previewpost/previewpost.module').then( m => m.PreviewpostPageModule)
  },
  {
    path: 'previewpost',
    loadChildren: () => import('./posts/previewpost/previewpost.module').then( m => m.PreviewpostPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
