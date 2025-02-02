import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  images = Array.from({ length: 20 }, (_, i) => `https://picsum.photos/200/300?random=${i + 1}`);
  searchQuery = '';
  constructor() {}
  get filteredImages() {
    if (!this.searchQuery) {
      return this.images;
    }
    return this.images.filter(image => image.includes(this.searchQuery.toLowerCase()));
  }

}
