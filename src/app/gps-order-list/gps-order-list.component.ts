import { Component } from '@angular/core';
import { IOrderListItem } from 'totvs-gps-controls';

@Component({
  selector: 'app-gps-order-list',
  templateUrl: './gps-order-list.component.html'
})
export class ExampleGpsOrderListComponent {

  constructor() { }

  code = 
'<gps-order-list\n' +
'  [items]="listEntrada"\n' +
'  [(orderedItems)]="listaOrdenada"\n' +
'  columnLabel="Titulo Coluna"\n' +
'  canChoose>\n' +
'</gps-order-list>\n';

  items: IOrderListItem[] = [
    {label:'Um',value:'1'},
    {label:'Dois',value:'2'},
    {label:'Tres',value:'3'},
    {label:'Quatro',value:'4'},
    {label:'Cinco',value:'5'},
    {label:'Seis',value:'6'},
  ];
  orderedItems = [];

}
