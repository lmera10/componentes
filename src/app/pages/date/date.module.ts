import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatePageRoutingModule } from './date-routing.module';

import { DatePage } from './date.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [DatePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatePageRoutingModule,
        ComponentsModule
    ]
})
export class DatePageModule {}
