import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleGpsServicesComponent } from './gps-services/gps-services.component';
import { ExampleGpsOrderListComponent } from './gps-order-list/gps-order-list.component';
import { ExampleGpsExportDataComponent } from './gps-export-data/gps-export-data.component';
import { ExampleGpsPageListComponent } from './gps-page-list/gps-page-list.component';
import { ExampleGpsModelFillComponent } from './gps-model-fill/gps-model-fill.component';

const appRoutes: Routes = [
    { path: '', component: ExampleGpsServicesComponent },
    { path: 'gps-services', component: ExampleGpsServicesComponent },
    { path: 'gps-order-list', component: ExampleGpsOrderListComponent },
    { path: 'gps-export-data', component: ExampleGpsExportDataComponent },
    { path: 'gps-page-list', component: ExampleGpsPageListComponent },
    { path: 'gps-model-fill', component: ExampleGpsModelFillComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
