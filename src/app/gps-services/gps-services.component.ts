import { Component } from '@angular/core';
import { GpsServicesService } from './gps-services.service';
import { PoTableColumn } from '@po-ui/ng-components';
import { PharmacologicalClass } from './gps-services.model';

@Component({
  selector: 'app-gps-services',
  templateUrl: './gps-services.component.html',
  providers: [GpsServicesService]
})
export class ExampleGpsServicesComponent {

  constructor(private service: GpsServicesService) { }

  columns: PoTableColumn[] = [
    { label: 'Codigo/Descricao', property: 'codeDescription' }
  ];

  //#region Before
  itemsBefore: PharmacologicalClass[] = [];
  codeBefore = 
  'get(filter?:string,page?:number,pageSize?:number): Observable<PharmacologicalClass[]> {\n' +
'    let url = \'/dts/datasul-rest/resources/prg/hpr/v1/pharmacologicalClasses\';\n' +
'    let params = [];\n' +
'    if (filter)\n' +
'        params.push(\'q=\' + encodeURIComponent(filter));\n' +
'    if (page)\n' +
'        params.push(\`page=${page}\`)\n' +
'    if (pageSize)\n' +
'        params.push(\`pageSize=${pageSize}\`)\n' +
'    if (params.length > 0)\n' +
'        url += \`?${params.join(\'&\')}\`;\n' +
'    return this.http\n' +
'        .get(url)\n' +
'        .pipe(\n' +
'            take(1),\n' +
'            map((result: any) => {\n' +
'                if (result?.items) {\n' +
'                    return result.items.map(item => {\n' +
'                        let obj = new PharmacologicalClass();\n' +
'                        Object.assign(obj, item);\n' +
'                        return obj;\n' +
'                    });\n' +
'                }\n' +
'                return [];\n' +
'            })\n' +
'        );\n' +
'}';

  exampleBefore() {
    this.service.exampleBefore('ANTI', 1, 5).subscribe(data => this.itemsBefore = data);
  }
  //#endregion

  //#region After
  itemsAfter: PharmacologicalClass[] = [];

  codeAfter = 
'get(filter?:string,page?:number,pageSize?:number): Promise<PharmacologicalClass[]> {\n' +
'    let url = \'hpr/v1/pharmacologicalClasses\';\n' +
'    return TotvsGpsServices\n' +
'        .getInstance<PharmacologicalClass[]>(PharmacologicalClass, url)\n' +
'        .setQueryParams({q:filter}).setPage(page).setPageSize(pageSize)\n' +
'        .get();\n' +
'}';

  exampleAfter() {
    this.service.exampleAfter('ANTI', 1, 5).then(data => this.itemsBefore = data);
  }

  //#endregion

}
