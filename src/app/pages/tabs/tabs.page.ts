import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tabs',
  imports: [CommonModule, IonicModule],
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss']
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}

  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('auth');
  }
}
