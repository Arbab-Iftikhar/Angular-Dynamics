import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataFormComponent } from '@app/shared/components/data-form/data-form.component';
import { DataGridComponent } from '@app/shared/components/data-grid/data-grid.component';
import { MessageService } from '@app/shared/services/message.service';
import { SpinnerService } from '@app/shared/services/spinner.service';
import { DocumentTypeMetaDataReaderService } from '@preferences/services/document-types-metaReader.service';


@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.scss'],
})
export class DocumentTypesComponent implements OnInit, AfterViewInit {

  public FormData: any;
  fromshow: boolean = false;
  FunctionSelected: string = '';
  DefaultValues: any;

  @ViewChild(DataFormComponent) dataform?: DataFormComponent;
  @ViewChild(DataGridComponent) datagrid?: DataGridComponent;

  constructor(private metaDataService: DocumentTypeMetaDataReaderService, private message: MessageService, private spinner: SpinnerService) {
  }
  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.metaDataService.getFormMetaData().subscribe(item => {
      this.FormData = item;
    })
  }
  New() {
    this.fromshow = true;
    this.FunctionSelected = "SAVE";
  }
  Discard() {
    this.dataform?.myForm.reset()
    this.fromshow = false;
  }
  Edit() {
    this.DefaultValues = {
      "Document Type ID": "1234",
      "Document Type Name": "CNIC Card",
      "Active": "active"
    };
    this.fromshow = true;
    this.FunctionSelected = "UPDATE";

  }

  Save(type: string) {
    this.spinner.IsBusy(true);
    setTimeout(() => {
      this.dataform?.Submit()
      this.dataform?.myForm.reset()
      this.fromshow = false;
      if (type == "SAVE")
        this.message.Show("Successfully Saved", "Saved");
      else
        this.message.Show("Successfully Updated", "Updated");
      this.datagrid?.Refreshed();
    }, 200);
    setTimeout(() => {
      this.spinner.IsBusy(false);
    }, 400);
  }
  Delete() {
    this.datagrid?.Remove();
    this.message.Show("Deleted Successfully", "Deleted")

  }
  Refresh() {
    this.spinner.IsBusy(true);
    setTimeout(() => {
      this.datagrid?.Refreshed()
      this.message.Show("Loaded Successfully", "Data Loaded")
      this.spinner.IsBusy(false);
    }, 500);
  }
}
