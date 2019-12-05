import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

enum Style {
  Grove = 'outset',
  }
@Component({
  selector: 'app-architects',
  templateUrl: './architects.page.html',
  styleUrls: ['./architects.page.scss'],
})
export class ArchitectsPage implements OnInit {
images = false;
details = true;
constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  onclickMywork() {
  this.images = true;
  this.details = false;

  }
  getStyle() {
    // tslint:disable-next-line: no-conditional-assignment
    if (this.images === true) {
       return Style.Grove;
    }

  }
  getStyle1() {
    if (this.details === true) {
      return Style.Grove;
   }
  }
  onclickDetailswork() {
    this.images = false;
    this.details = true;
  }

}
