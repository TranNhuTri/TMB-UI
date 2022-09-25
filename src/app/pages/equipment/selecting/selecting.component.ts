import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentsService, Element } from '../equipments.service';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html'
})
export class SelectingComponent implements OnInit {
  public displayedColumns = ['select','position', 'name', 'datebuy', 'datedelivery','dateactualdelivery','quantity','price','supplier','otherfee','paid','total'];
  public dataSource:any;
  public selection = new SelectionModel<Element>(true, []);
  constructor(private tablesService:EquipmentsService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
