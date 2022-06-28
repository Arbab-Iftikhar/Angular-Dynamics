import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'


//--App Modules
import { IamModule } from '@iam/iam.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MainModule } from '@main/main.module';
import { PreferencesModule } from '@preferences/preferences.module';
import { SharedModule } from '@shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
import { HttpService } from './shared/services/http.service';
import { MiscService } from './shared/services/misc/misc.service';
import { MessageService } from './shared/services/misc/message.service';
import { SpinnerService } from './shared/services/misc/spinner.service';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserPermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      newestOnTop: true,
    }),

    //--App Modules
    IamModule,
    MainModule,
    PreferencesModule,
    SharedModule
  ],
  providers: [HttpService, MiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
