import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotvsGpsServicesModule } from 'totvs-gps-services';
import { TotvsGpsControlsModule } from 'totvs-gps-controls';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleGpsServicesComponent } from './gps-services/gps-services.component';
import { ExampleGpsOrderListComponent } from './gps-order-list/gps-order-list.component';
import { ExampleGpsExportDataComponent } from './gps-export-data/gps-export-data.component';
import { ExampleGpsPageEditComponent } from './gps-page-edit/gps-page-edit.component';
import { ExampleGpsPageListComponent } from './gps-page-list/gps-page-list.component';
import { ExampleGpsModelFillComponent } from './gps-model-fill/gps-model-fill.component';

const modules = [
  BrowserModule,
  CommonModule,
  FormsModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  PoModule,
  PoCodeEditorModule,
  TotvsGpsServicesModule,
  TotvsGpsControlsModule
];
const components = [
    ExampleGpsServicesComponent,
    ExampleGpsOrderListComponent,
    ExampleGpsExportDataComponent,
    ExampleGpsPageEditComponent,
    ExampleGpsPageListComponent,
    ExampleGpsModelFillComponent
];
const directives = [
];
const pipes = [
];
@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components,
    ...directives,
    ...pipes,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
