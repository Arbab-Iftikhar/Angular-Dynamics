import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from '@iam/views/auth/auth.component';
import { AuthService } from '@iam/services/auth.service';
import { UserRegistrationComponent } from '@iam/views/user-registration/user-registration.component';

import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  declarations: [
    AuthComponent,
    UserRegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService]
})
export class IamModule { }
