import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PharmacologicalClass } from './gps-services.model';
import { TotvsGpsServices } from 'totvs-gps-services';

@Injectable({
  providedIn: 'root'
})
export class GpsServicesService {

    constructor(private http: HttpClient) {}
  
    exampleBefore(filter?:string,page?:number,pageSize?:number): Observable<PharmacologicalClass[]> {
        let url = '/dts/datasul-rest/resources/prg/hpr/v1/pharmacologicalClasses';
        let params = []
        if (filter)
            params.push('q=' + encodeURIComponent(filter));
        if (page)
            params.push(`page=${page}`)
        if (pageSize)
            params.push(`pageSize=${pageSize}`)
        if (params.length > 0)
            url += `?${params.join('&')}`;
        return this.http
            .get(url)
            .pipe(
                take(1),
                map((result: any) => {
                    if (result?.items) {
                        return result.items.map(item => {
                            let obj = new PharmacologicalClass();
                            Object.assign(obj, item);
                            return obj;
                        });
                    }
                    return [];
                })
            );
    }

    exampleAfter(filter?:string,page?:number,pageSize?:number): Promise<PharmacologicalClass[]> {
        return TotvsGpsServices
            .getInstance<PharmacologicalClass[]>(PharmacologicalClass, 'hpr/v1/pharmacologicalClasses')
            .setQueryParams({q:filter}).setPage(page).setPageSize(pageSize)
            .get();
    }


}
