import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBoloPageRoutingModule } from './add-bolo-routing.module';

import { AddBoloPage } from './add-bolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBoloPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddBoloPage]
})
export class AddBoloPageModule {}
