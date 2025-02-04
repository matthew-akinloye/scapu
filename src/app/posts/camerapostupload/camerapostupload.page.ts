import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camerapostupload',
  templateUrl: './camerapostupload.page.html',
  styleUrls: ['./camerapostupload.page.scss'],
  standalone: false,
})
export class CamerapostuploadPage implements OnInit {
  selectedMedia: string | undefined | null;
  isImage = true;
  isVideo = false
  caption = '';
  location = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.openCamera();
  }

  async openCamera() {
    try {
      const media = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      console.log('Media format:', media.format);

      if (media) {
        this.selectedMedia = media.webPath;
        this.isImage = media.format !== 'mp4';
        this.isVideo = media.format === 'mp4';
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    }
  }

  deleteMedia() {
    this.selectedMedia = null;
  }

  openLocationSearch() {
    this.location = 'New York, NY';
  }

  goToPreview() {
    this.router.navigate(['/previewpost'], {
      queryParams: { media: this.selectedMedia, caption: this.caption, location: this.location }
    });
  }
}
