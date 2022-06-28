import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PMainComponent } from '@preferences/views/pmain/pmain.component';
import { DashboardComponent } from '@app/shared/components/dashboard/dashboard.component';
import { MainComponent } from '@main/main/main.component';
import { UserPermissionsComponent } from '@app/user-permissions/user-permissions.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: "preferences/:id",
                component: PMainComponent
            },
            {
                path:"permissions",
                component: UserPermissionsComponent 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
