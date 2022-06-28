import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { SharedModule } from '@app/shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    NgxSpinnerModule,
    MainRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class MainModule { }
