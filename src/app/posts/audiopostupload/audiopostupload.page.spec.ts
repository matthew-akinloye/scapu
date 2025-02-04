import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudiopostuploadPage } from './audiopostupload.page';

describe('AudiopostuploadPage', () => {
  let component: AudiopostuploadPage;
  let fixture: ComponentFixture<AudiopostuploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiopostuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
