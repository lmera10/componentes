import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerPageRoutingModule } from './picker-routing.module';

import { PickerPage } from './picker.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [PickerPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PickerPageRoutingModule,
        ComponentsModule
    ]
})
export class PickerPageModule {}
