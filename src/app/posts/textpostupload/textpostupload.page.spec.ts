import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextpostuploadPage } from './textpostupload.page';

describe('TextpostuploadPage', () => {
  let component: TextpostuploadPage;
  let fixture: ComponentFixture<TextpostuploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextpostuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
