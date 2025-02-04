import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-camerapostupload',
  templateUrl: './camerapostupload.page.html',
  styleUrls: ['./camerapostupload.page.scss'],
  standalone: false,
})
export class CamerapostuploadPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.openCamera();
  }


  // Open device camera
  async openCamera() {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera, // Open camera
      });

      console.log('Photo URI:', photo.webPath);
      // Handle the photo (e.g., display or upload it)
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  }

}
