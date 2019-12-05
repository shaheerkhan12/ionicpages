import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchitectsPageRoutingModule } from './architects-routing.module';

import { ArchitectsPage } from './architects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchitectsPageRoutingModule
  ],
  declarations: [ArchitectsPage]
})
export class ArchitectsPageModule {}
