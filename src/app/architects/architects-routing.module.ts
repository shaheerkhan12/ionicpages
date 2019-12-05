import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchitectsPage } from './architects.page';

const routes: Routes = [
  {
    path: '',
    component: ArchitectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchitectsPageRoutingModule {}
