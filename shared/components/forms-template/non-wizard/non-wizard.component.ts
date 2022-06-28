import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MetaDataReaderService } from '@shared/services/MetaDataReader.service'
import { DataFormComponent } from '@shared/components/data-form/data-form.component';
import { DataGridComponent } from '@shared/components/data-grid/data-grid.component';
import { HttpService } from '@shared/services/http.service';
@Component({
  selector: 'app-non-wizard',
  templateUrl: './non-wizard.component.html',
  styleUrls: ['./non-wizard.component.scss']
})
export class NonWizardComponent implements OnInit,OnChanges {


  public FormData: any;
  fromshow: boolean = false;
  FunctionSelected: string = '';
  DefaultValues: any;
  @Input() Formid: any;

  @ViewChild(DataFormComponent) dataform?: DataFormComponent;
  @ViewChild(DataGridComponent) datagrid?: DataGridComponent;

  constructor(private metaDataService: MetaDataReaderService, private http: HttpService) {
  }
  ngAfterViewInit() {
  }

  ngOnChanges(): void {
    this.getData()
  }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.metaDataService.getFormMetaData(this.Formid).subscribe(item => {
      this.FormData = item;
    })
  }
  New() {
    ///this.spinner.IsBusy(true);
    setTimeout(() => {
      this.fromshow = true;
      this.datagrid?.selection.clear();
      this.FunctionSelected = "SAVE";
      //this.spinner.IsBusy(false)
    }, 500);
  }
  Discard() {
    //this.spinner.IsBusy(true)
    setTimeout(() => {
      this.dataform?.myForm.reset()
      this.fromshow = false;
      // this.spinner.IsBusy(false);
    }, 500);
  }
  Edit() {
    // this.spinner.IsBusy(true);
    setTimeout(() => {
      this.dataform?.SetValues(this.datagrid?.selection.selected[0]);
      this.fromshow = true;
      this.FunctionSelected = "UPDATE";
      // this.spinner.IsBusy(false)
    }, 500);

  }

  Save(mode: string) {
    //this.spinner.IsBusy(true);
    setTimeout(() => {
      if (mode == "SAVE") {
        let rowid = this.datagrid?.data.length! + 1;
        this.dataform?.myForm.get('rowId')?.setValue(rowid);
        let data = this.dataform?.GetFormValues()
        this.datagrid?.Add(data);
        //  this.message.Show("Successfully Saved", "Saved");
      }
      else {
        let data = this.dataform?.GetFormValues()
        this.datagrid?.Update(data);
        // this.message.Show("Successfully Updated", "Updated");
      }
      this.dataform?.myForm.reset()
      this.fromshow = false;
      this.datagrid?.Refreshed();
    }, 200);
    setTimeout(() => {
      // this.spinner.IsBusy(false);
    }, 400);
  }
  Delete() {
    //this.spinner.IsBusy(true)
    this.datagrid?.Remove();
    // this.message.Show("Deleted Successfully", "Deleted")
    // this.spinner.IsBusy(false);
  }
  Refresh() {
    //this.spinner.IsBusy(true);
    setTimeout(() => {
      this.datagrid?.Refreshed()
      // this.message.Show("Loaded Successfully", "Data Loaded")
      // this.spinner.IsBusy(false);
    }, 500);
  }
}
