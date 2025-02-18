import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollPage } from './scroll.page';

describe('ScrollPage', () => {
  let component: ScrollPage;
  let fixture: ComponentFixture<ScrollPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
