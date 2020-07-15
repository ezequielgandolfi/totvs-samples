import { Component } from '@angular/core';
import { PoMenuItem, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    menus: PoMenuItem[] = [
        { label: 'Gps Services', link: 'gps-services' },
        { label: 'Gps Order List', link: 'gps-order-list' },
        { label: 'Gps Export Data', link: 'gps-export-data' },
        { label: 'Gps Page List', link: 'gps-page-list' }
    ]

}
