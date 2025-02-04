import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediapostuploadPage } from './mediapostupload.page';

describe('MediapostuploadPage', () => {
  let component: MediapostuploadPage;
  let fixture: ComponentFixture<MediapostuploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MediapostuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
