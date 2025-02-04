import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamerapostuploadPage } from './camerapostupload.page';

describe('CamerapostuploadPage', () => {
  let component: CamerapostuploadPage;
  let fixture: ComponentFixture<CamerapostuploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerapostuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
