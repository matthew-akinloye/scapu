import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewpostPage } from './previewpost.page';

describe('PreviewpostPage', () => {
  let component: PreviewpostPage;
  let fixture: ComponentFixture<PreviewpostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
