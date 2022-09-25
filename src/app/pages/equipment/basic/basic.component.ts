import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { EquipmentsService, Element } from '../equipments.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns = ['position', 'name', 'datebuy', 'datedelivery','dateactualdelivery',
  'quantity','price','supplier','otherfee','paid','total'];

  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private tablesService:EquipmentsService) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}