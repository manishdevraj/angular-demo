import { Component, EventEmitter, Input, ElementRef, Output ,ViewChild} from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';
import { GridOptions } from 'ag-grid-community';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-aggrid-wrapper',
  templateUrl: './aggrid-wrapper.component.html',
  styleUrls: ['./aggrid-wrapper.component.scss']
})
export class AggridWrapperComponent implements FormioCustomComponent<number>  {
  @Input()
  value: number;  //number is missing (null)

  @ViewChild('aggrid') input; 

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled: boolean;

  private _value: number;

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData: Observable<any[]>;

  rowTempData: Observable<any[]> = of([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  public gridOptions: GridOptions;
  api: any;
  columnApi: any;

  constructor(private elRef: ElementRef) {
    this.gridOptions = <GridOptions>{
      columnDefs: this.createColumnsDefs()
    }
  }

  onGridReady = (params) => {
    this.rowTempData.subscribe(row => {
      //to stop from showing loadig icon
      this.gridOptions.api.setRowData([]);
      // Following line to make the currently visible columns fit the screen  
      this.gridOptions.api.sizeColumnsToFit();
      //this.gridOptions.api.setRowData(row);
    })
  }

  createColumnsDefs() {
    return this.columnDefs;  
  }

}
