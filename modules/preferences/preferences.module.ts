import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { MetaDataReaderService } from '@app/shared/services/MetaDataReader.service';
import { MaterialModule } from '@app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PMainComponent } from './views/pmain/pmain.component';


@NgModule({
  declarations: [
    PMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule
  ], providers: [MetaDataReaderService]
})
export class PreferencesModule { }
