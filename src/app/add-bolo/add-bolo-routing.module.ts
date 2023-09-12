import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBoloPage } from './add-bolo.page';

const routes: Routes = [
  {
    path: '',
    component: AddBoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBoloPageRoutingModule {}
