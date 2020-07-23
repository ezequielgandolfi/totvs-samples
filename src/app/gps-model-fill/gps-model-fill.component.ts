import { Component } from '@angular/core';
import { IOrderListItem, IModelFillData } from 'totvs-gps-controls';
import { TotvsGpsServices } from 'totvs-gps-services';

@Component({
  selector: 'app-gps-model-fill',
  templateUrl: './gps-model-fill.component.html'
})
export class ExampleGpsModelFillComponent {

  constructor() { }

  code = 
'<!-- O componente é ativado apenas em modo de desenvolvimento -->\n' +
'<!-- ou, manualmente, quando inserido na url o parametro `mode=dev` -->\n' +
'<gps-model-fill \n' +
'    [model]="[{description:\'Teste Gps Model Fill\',model:this.model,url:\'http://cxs-squad-tools:9901/example/TESTE\'}]">\n' +
'</gps-model-fill>';

  data = {
    $person: {
        full_name: '',
        cpf: '',
        cns: '',
        pis: '',
        phone: ''
    }
  };

  modelFillData: IModelFillData[] = [
    { description: 'Teste Gps Model Fill', model: this.data, url: 'http://cxs-squad-tools:9901/example/TESTE' }
  ];

}
