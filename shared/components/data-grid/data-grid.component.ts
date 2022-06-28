import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})


export class DataGridComponent implements OnInit,OnChanges {

  @Input() DataGrid: any;
  dataSource!: MatTableDataSource<any>;
  displayedColumns: any
  selection = new SelectionModel<any>(true, []);
  isSelected: any = false;
  isMultiSelected: any = true;

  Columns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }
  ngOnChanges(): void {
    
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = (this.DataGrid['Columns'])
    this.Columns=[]
    this.displayedColumns.forEach((item: any) => {
      this.Columns.push(item.ColumnId)
      this.onSelectionChanges();
    });
  }

  ngOnInit(): void {
    this.AddColumns()
    this.dataSource = new MatTableDataSource();
    this.onSelectionChanges();
  }
  AddColumns() {
    this.displayedColumns = (this.DataGrid['Columns'])

    if (this.DataGrid['Properties']['SelectionColumn'] == true) {
      this.displayedColumns.unshift(
        {
          "ColumnId": "select",
          "label": "select",
          "type": "select"
        }
      );
    }
    else {

    }

    this.displayedColumns.forEach((item: any) => {
      this.Columns.push(item.ColumnId)
    });
  }
  Refreshed() {
    let data = this.data
    this.dataSource = new MatTableDataSource(data);
    this.loadResources();
  }

  onSelectionChanges() {
    this.selection.changed.subscribe(s => {
      if (this.selection.selected.length == 1) {
        this.isSelected = true
        this.isMultiSelected = false
      }
      else if (this.selection.selected.length <= 0) {
        this.isMultiSelected = true;
        this.isSelected = false;
      }
      else if (this.selection.selected.length > 1) {
        this.isSelected = true;
        this.isMultiSelected = true;
      }
    });
  }

  loadResources() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  Remove() {
    let Data = this.data
    let selected = this.selection.selected;
    selected.forEach(element => {
      var key = Object.keys(element)[0];
      var value = Object.values(element)[0];
      RemoveElementFromObjectArray(Data, key, value);
    });
    this.DataGrid['Data'] = Data;
    this.dataSource = new MatTableDataSource(Data)
    this.selection.clear();
  }
  Add(Data: object) {
    let data = this.data;
    data.push(Data);
    this.dataSource = new MatTableDataSource(data);
    console.log(data);
  }
  Update(Data: any) {
    this.data.forEach((element, index) => {
      if (element[Object.keys(element)[0]] == Data[Object.keys(element)[0]]) {
        this.data[index] = Data;
      }
    });
    this.selection.clear();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  data: any[] = [];

}
function RemoveElementFromObjectArray(Array: Array<any>, key: any, Value: any) {
  Array.forEach((value: any, index: any) => {
    if (value[key] == Value)
      Array.splice(index, 1);
  });
}
