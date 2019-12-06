import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

enum Style {
  Grove = 'outset',
  color = 'rgb(0, 255, 206)'
}

@Component({
  selector: 'app-architects',
  templateUrl: './architects.page.html',
  styleUrls: ['./architects.page.scss'],
})
export class ArchitectsPage implements OnInit {

  images = false;
  details = true;
  About = true;
  Contact = false;
  Address = false;
  MailingAddress = false;
  // tslint:disable-next-line: max-line-length
  name = [{ index: 'content', name: 'University Design', pos: 'An App against deforestation', url: '../../assets/universitydesign/1.jpg', portfolio: { About: 'about', contactDetails: '03155021042', Address: 'Office # 1, First Floor, Building 1A, Block R, Blue Area, Islamabad.', mailingAddress: 'shaheerkhan58@hotmail.com' }, images: [{ url: '../../assets/universitydesign/1.jpg' }, { url: '../../assets/universitydesign/2.jpg' }, { url: '../../assets/universitydesign/3.jpg' }, { url: '../../assets/universitydesign/4.jpg' }] },
  // tslint:disable-next-line: max-line-length
  { index: 'content1', name: 'Spanish Villa', pos: 'An Artificial intelligence based project', url: '../../assets/spanishvilla/1.jpg', images: [{ url: '../../assets/spanishvilla/1.jpg' }, { url: '../../assets/spanishvilla/2.jpg' }, { url: '../../assets/spanishvilla/3.jpg' }, { url: '../../assets/spanishvilla/4.jpg' }] },
  // tslint:disable-next-line: max-line-length
  { index: 'content2', name: 'Ramada Hotel', pos: 'An Artificial intelligence and Image recognition system', url: '../../assets/ramada hotel/1.jpg', images: [{ url: '../../assets/ramada hotel/1.jpg' }, { url: '../../assets/ramada hotel/2.jpg' }, { url: '../../assets/ramada hotel/3.jpg' }, { url: '../../assets/ramada hotel/4.jpg' }] },
  { index: 4, name: 'My project ', pos: 'developer', url: '../../assets/imag2.jpg' }];


  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        firstName: 'Douglas',
        lastName: 'Adams',
        middleInitial: 'N'
      }
    });
    return await modal.present();
  }
  ngOnInit() {
  }
  onclickbtn(cond: string) {
   if (cond === 'A') {
    this.About = true;
    this.Contact = false;
    this.Address = false;
    this.MailingAddress = false;
   } else if (cond === 'B') {
    this.About = false;
    this.Contact = true;
    this.Address = false;
    this.MailingAddress = false;
   } else if (cond === 'C') {
    this.About = false;
    this.Contact = false;
    this.Address = true;
    this.MailingAddress = false;
   } else if (cond === 'D') {
    this.About = false;
    this.Contact = false;
    this.Address = false;
    this.MailingAddress = true;
   }
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
  getsty(cond: string) {
    if (cond === 'A'  && this.About === true) {
      return Style.Grove;
    } else if (cond === 'B' && this.Contact === true) {
      return Style.Grove;
    } else if (cond === 'C'  && this.Address === true) {
      return Style.Grove;
    } else if (cond === 'D'  && this.MailingAddress === true) {
      return Style.Grove;
    }
  }
  getcol(cond: string) {
      if (cond === 'A'  && this.About === true) {
      return Style.color;
    } else if (cond === 'B' && this.Contact === true) {
      return Style.color;
    } else if (cond === 'C'  && this.Address === true) {
      return Style.color;
    } else if (cond === 'D'  && this.MailingAddress === true) {
      return Style.color;
    }
  }

  onclickDetailswork() {
    this.images = false;
    this.details = true;
  }

}
