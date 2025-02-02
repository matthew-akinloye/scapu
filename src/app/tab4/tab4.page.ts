import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
  items = [
    { name: 'USA', icon: 'location-outline' },
    { name: 'Mexico', icon: 'location-outline' },
    { name: 'Canada', icon: 'location-outline' }
  ];

  deleteItem(item: any) {
    this.items = this.items.filter(i => i !== item);
  }
}
