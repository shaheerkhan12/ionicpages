import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchitectsPageRoutingModule } from './architects-routing.module';

import { ArchitectsPage } from './architects.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalPagePageModule } from '../modal-page/modal-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitectsPageRoutingModule, NgbModule, ModalModule, ModalPagePageModule
  ],
  declarations: [ArchitectsPage]
})
export class ArchitectsPageModule {}
