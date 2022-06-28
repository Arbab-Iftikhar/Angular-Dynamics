import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataFormComponent } from '@shared/components/data-form/data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';
import { ViewHeaderComponent } from '@shared/components/view-header/view-header.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { NonWizardComponent } from '@shared/components/forms-template/non-wizard/non-wizard.component';
import { FormButtonsComponent } from '@shared/components/form-buttons/form-buttons.component';
import { ToActiveStatePipe } from './pipes/to-active-state.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from '@shared/components/toolbar/toolbar.component'

@NgModule({
  declarations: [
    DataFormComponent,
    ViewHeaderComponent,
    DataGridComponent,
    NonWizardComponent,
    FormButtonsComponent,
    ToActiveStatePipe,
    ViewHeaderComponent,
    DashboardComponent,
    SideNavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    PerfectScrollbarModule,
    RouterModule
  ],
  exports: [
    DataFormComponent,
    ViewHeaderComponent,
    DataGridComponent,
    NonWizardComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
