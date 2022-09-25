import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { EquipmentsService, Element } from './equipments.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipments.component.html'
})
export class EquipmentsComponent {
  public displayedColumns = ['position', 'name', 'datebuy', 'datedelivery','dateactualdelivery','quantity','price','supplier','otherfee','paid','total'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private equipmentsService:EquipmentsService) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.equipmentsService.getData());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}