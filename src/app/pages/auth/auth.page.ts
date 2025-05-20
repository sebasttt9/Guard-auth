import { Component } from '@angular/core';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage {
  username = '';
  password = '';

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  async login() {
    if (this.username === 'sebastian' && this.password === '1234') {
      localStorage.setItem('token', 'fake_token');
      this.navCtrl.navigateRoot('tabs');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
