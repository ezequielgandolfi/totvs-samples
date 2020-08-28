import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { GpsPageEditComponent, IDisclaimerConfig } from 'totvs-gps-controls';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-gps-page-edit',
  templateUrl: './gps-page-edit.component.html',
  styleUrls: ['./gps-page-edit.component.css']
})
export class ExampleGpsPageEditComponent implements AfterContentInit {

  @ViewChild('gpsPageEdit', {static:false}) gpsPageEdit: GpsPageEditComponent;

  constructor() { }

  ngAfterContentInit() {
  }

  codeTS = 
'@ViewChild(\'gpsPageEdit\', {static:false}) gpsPageEdit: GpsPageEditComponent;\n' +
'\n' +
'onLoadingClick() {\n' +
'  this.gpsPageEdit.showLoading(\'TESTE!!!\');\n' +
'  setTimeout(() => { this.gpsPageEdit.hideLoading() }, 3000); \n' +
'}\n' +
'\n' +
'onCustomClick() {\n' +
'  let fields: PoDynamicFormField[] = [\n' +
'    { property: \'field1\', label: \'Campo Um\' },\n' +
'    { property: \'field2\', label: \'Campo Dois\' }\n' +
'  ];\n' +
'  let values = { field1: \'111\', field2: \'222\' };\n' +
'  this.gpsPageEdit.customFields = { fields, values };\n' +
'  this.gpsPageEdit.hasCustomFields = true;\n' +
'}\n';

  filter: any = { };
  diclaimerConfig: IDisclaimerConfig[] = [
    { label: 'Pesquisa por', property: 'q' },
    { label: 'Nome', property: 'name' },
    { label: 'Período', property: 'startDate', group: 'periodo', type: 'date', value: (v) => { return `de ${v}` } },
    { label: 'Período', property: 'endDate', group: 'periodo', type: 'date', separator: ' ', value: (v) => { return `até ${v}` } },
  ];

  onLoadingClick() {
    this.gpsPageEdit.showLoading('TESTE!!!');
    setTimeout(() => {
      this.gpsPageEdit.hideLoading();
    }, 3000); 
  }

  onCustomClick() {
    let fields: PoDynamicFormField[] = [
      { property: 'field1', label: 'Campo Um' },
      { property: 'field2', label: 'Campo Dois' }
    ];
    let values = { field1: '111', field2: '222' };
    this.gpsPageEdit.customFields = { fields, values };
    this.gpsPageEdit.hasCustomFields = true;
  }

}
