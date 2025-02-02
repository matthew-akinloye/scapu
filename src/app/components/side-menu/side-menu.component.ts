import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone:false,
})
export class SideMenuComponent {

  constructor(private menu: MenuController) { }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    this.closeMenu();
    console.log('Logging out...');
    // Add your logout logic here
  }
}
