import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { EquipmentsService, Element } from '../equipments.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html'
})
export class PagingComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['position', 'name', 'datebuy', 'datedelivery','dateactualdelivery','quantity','price','supplier','otherfee','paid','total'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private tablesService:EquipmentsService) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}