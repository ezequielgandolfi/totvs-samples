import { Component, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { GpsPageListComponent, IDisclaimerConfig } from 'totvs-gps-controls';

@Component({
  selector: 'app-gps-page-list',
  templateUrl: './gps-page-list.component.html',
  styles: ['./gps-page-list.component.css']
})
export class ExampleGpsPageListComponent implements AfterContentInit {

  @ViewChild('gpsPageList', {static:false}) gpsPageList: GpsPageListComponent;

  constructor() { }

  ngAfterContentInit() {
  }

  codeTS = 
'filter: any = { };\n' +
'diclaimerConfig: IDisclaimerConfig[] = [\n' +
'    { label: \'Pesquisa por\', property: \'q\' },\n' +
'    { label: \'Nome\', property: \'name\' },\n' +
'    { label: \'Período\', property: \'startDate\', type: \'date\', group: \'periodo\', value: (v) => { return \`de ${v}\` } },\n' +
'    { label: \'Período\', property: \'endDate\', type: \'date\', group: \'periodo\', separator: \' \', value: (v) => { return \`até ${v}\` } },\n' +
'];';

  codeHTML = 
'<gps-page-list\n' +
'    p-title="GPS Page List"\n' +
'    [(filter)]="filter"\n' +
'    [disclaimer-config]="diclaimerConfig"\n' +
'    (on-search)="onSearch($event)"\n' +
'    (on-advanced-search)="onAdvancedSearch()">\n' +
'\n' +
'    <ng-template gps-advanced-search>\n' +
'        <div class="po-row">\n' +
'            <po-input\n' +
'                name="name"\n' +
'                class="po-md-12"\n' +
'                p-label="Nome"\n' +
'                [(ngModel)]="filter.name">\n' +
'            </po-input>\n' +
'            <po-datepicker\n' +
'                name="startDate"\n' +
'                class="po-md-6"\n' +
'                p-label="Data inicial"\n' +
'                [(ngModel)]="filter.startDate">\n' +
'            </po-datepicker>\n' +
'            <po-datepicker\n' +
'                name="endDate"\n' +
'                class="po-md-6"\n' +
'                p-label="Data final"\n' +
'                [(ngModel)]="filter.endDate">\n' +
'            </po-datepicker>\n' +
'        </div>\n' +
'    </ng-template>\n' +
'</gps-page-list>';

  filter: any = { };
  diclaimerConfig: IDisclaimerConfig[] = [
    { label: 'Pesquisa por', property: 'q' },
    { label: 'Nome', property: 'name' },
    { label: 'Período', property: 'startDate', group: 'periodo', type: 'date', value: (v) => { return `de ${v}` } },
    { label: 'Período', property: 'endDate', group: 'periodo', type: 'date', separator: ' ', value: (v) => { return `até ${v}` } },
  ];

  onSearch(text) {
    this.filter = {q:text};
    setTimeout(() => {
      alert('Pesquisa simples!');
    }, 10); 
  }

  onAdvancedSearch() {
    this.filter.q = null;
    setTimeout(() => {
      alert('Pesquisa avançada!');
    }, 10); 
  }
  

}
