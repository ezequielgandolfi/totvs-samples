import * as faker from 'faker'; //https://www.npmjs.com/package/faker
import { Component, ViewChild } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { IOrderListItem, GpsExportDataComponent, IExportColumn } from 'totvs-gps-controls';
import { TotvsGpsDateUtils } from 'totvs-gps-utils';

@Component({
  selector: 'app-gps-export-data',
  templateUrl: './gps-export-data.component.html'
})
export class ExampleGpsExportDataComponent {

  @ViewChild('gpsExportData', {static:false}) gpsExportData: GpsExportDataComponent;

  constructor() { 
    faker.locale = 'pt_BR';
      this.generate();
  }

  codeTS = 
'exportColumns: IExportColumn[] = [\n' +
'    { property: \'name\', label: \'Nome\', transform: (value:string) => { return value.toUpperCase() } },\n' +
'    { property: \'birthDate\', label: \'Nascimento\', transform: (value) => { return TotvsGpsDateUtils.getInstance().getLocaleDate(value) } },\n' +
'    { property: \'job\', label: \'Profissão\' }\n' +
'];\n' +
'\n' +
'export() {\n' +
'    this.gpsExportData.export(true);\n' +
'}';
  codeHTML = 
'<gps-export-data #gpsExportData\n' +
'    [data]="items"\n' +
'    [columns]="exportColumns"\n' +
'    fileName="exemploGpsExportData.csv"\n' +
'    canChoose>\n' +
'</gps-export-data>';

  items: any[] = [];
  columns: PoTableColumn[] = [
    { property: 'name', label: 'Nome' },
    { property: 'birthDate', label: 'Nascimento', type: 'date' },
    { property: 'job', label: 'Profissão' }
  ];
  exportColumns: IExportColumn[] = [
    { property: 'name', label: 'Nome', transform: (value:string) => { return value.toUpperCase() } },
    { property: 'birthDate', label: 'Nascimento', transform: (value) => { return TotvsGpsDateUtils.getInstance().getLocaleDate(value) } },
    { property: 'job', label: 'Profissão' }
  ];

  generate() {
    for (let index = 0; index < 10; index++) {
      this.items.push({
        name: faker.name.findName(),
        birthDate: faker.date.past(),
        job: faker.name.jobTitle()
      });
    }
  }

  export() {
    this.gpsExportData.export(true);
  }

}
