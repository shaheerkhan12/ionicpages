import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';

enum Style {
  Grove = 'outset',
  color = 'rgb(0, 255, 206)',
  color1 = '#38bba2'
}
enum COLORS {
  Orange = '#FFCA28',
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
  name = { index: 'content', name: 'University Design', pos: 'An App against deforestation', About: 'hi i am shaheer and i have studied BS in software Eng', url: '../../assets/universitydesign/1.jpg', contactDetails: '+92 0315 5021042', Address: 'Office # 1, First Floor, Building 1A, Block R, Blue Area, Islamabad.', mailingAddress: 'shaheerkhan58@hotmail.com', images: [{ url: '../../assets/ramada hotel/1.jpg' }, { url: '../../assets/ramada hotel/2.jpg' }, { url: '../../assets/ramada hotel/3.jpg' }, { url: '../../assets/ramada hotel/4.jpg' }], images1: [{ url: '../../assets/universitydesign/1.jpg' }, { url: '../../assets/universitydesign/2.jpg' }, { url: '../../assets/universitydesign/3.jpg' }, { url: '../../assets/universitydesign/4.jpg' }] };
  rating = 4 ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  constructor(public modalController: ModalController) { }


  getC(index: number) {
    // tslint:disable-next-line: no-unused-expression
    this.rating;
    this.ratingChange.emit(this.rating);
    if (this.isAboveRating(index)) {
      return COLORS.Orange;
    }
  }

  isAboveRating(index: number): boolean {
    return index < this.rating;
  }
  async presentModal(imageurlfromimage) {
    const modal = await this.modalController.create({
      component: ModalPagePage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        // tslint:disable-next-line: max-line-length
        url: imageurlfromimage,
        // tslint:disable-next-line: max-line-length
        images: [{ url: '../../assets/ramada hotel/1.jpg' }, { url: '../../assets/ramada hotel/2.jpg' }, { url: '../../assets/ramada hotel/3.jpg' }, { url: '../../assets/ramada hotel/4.jpg' }],
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
  getStyle(cond: string) {
    // tslint:disable-next-line: no-conditional-assignment
    if (cond === 'A' && this.images === true) {
      return Style.Grove;
    } else if (cond === 'B' && this.details === true) {
      return Style.Grove;
    }

  }
  getColor(cond: string) {
    if (cond === 'A' && this.images === true) {
      return Style.color;
    } else if (cond === 'B' && this.details === true) {
      return Style.color;
    }
  }
  getSty(cond: string) {
    if (cond === 'A' && this.About === true) {
      return Style.Grove;
    } else if (cond === 'B' && this.Contact === true) {
      return Style.Grove;
    } else if (cond === 'C' && this.Address === true) {
      return Style.Grove;
    } else if (cond === 'D' && this.MailingAddress === true) {
      return Style.Grove;
    }
  }
  getCol(cond: string) {
    if (cond === 'A' && this.About === true) {
      return Style.color;
    } else if (cond === 'B' && this.Contact === true) {
      return Style.color;
    } else if (cond === 'C' && this.Address === true) {
      return Style.color;
    } else if (cond === 'D' && this.MailingAddress === true) {
      return Style.color;
    }
  }
  getCol1(cond: string) {
    if (cond === 'A' && this.About === true) {
      return Style.color1;
    } else if (cond === 'B' && this.Contact === true) {
      return Style.color1;
    } else if (cond === 'C' && this.Address === true) {
      return Style.color1;
    } else if (cond === 'D' && this.MailingAddress === true) {
      return Style.color1;
    }
  }
  gettabColor(cond: string) {
    if (cond === 'A' && this.images === true) {
      return Style.color1;
    } else if (cond === 'B' && this.details === true) {
      return Style.color1;
    }
  }
  onclickDetailswork() {
    this.images = false;
    this.details = true;
  }

}
