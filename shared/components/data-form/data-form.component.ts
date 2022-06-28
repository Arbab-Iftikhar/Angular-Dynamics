import { ChangeDetectionStrategy, Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataFormComponent implements OnChanges {

  @Input() DataForm: any;


  Functionslected: string = "";
  public myForm: FormGroup = new FormGroup({});
  public range: FormGroup = new FormGroup({});

  constructor() { }


  SetValues(obj: Object) {
    this.myForm.setValue(obj);
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change.DataForm.firstChange) {
      this.CreateForm(this.DataForm['Fields']);
    }
  }
  CreateForm(Fields: any) {
    let myForm = this.myForm;
    let range = this.range;
    myForm.addControl('rowId', new FormControl());

    Fields.forEach(function (field: any) {
      let validatorsToAdd = [];
      for (const [key, value] of Object.entries(field['validators'])) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(Number(value)));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(Number(value)));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(Number(value)));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(Number(value)));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(String(value)));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      if (field['type'] == "date-range") {
        range.addControl('start', new FormControl(field['type_options']['start']));
        range.addControl('end', new FormControl(field['type_options']['end']));
        myForm.addControl(field['ControlId'], range)
      }
      else {
        myForm.addControl(field['ControlId'], new FormControl(field['value'], validatorsToAdd))

      }
    }
    );
    this.myForm = myForm;
  }

  GetFormValues() {
    console.log(this.myForm.value);
    return this.myForm.value;
  }

  ConvertToString(number: Number): string {
    return String(number)
  }


  IsSupported(type: string, value: string): boolean {
    switch (type) {
      case 'input':
        {
          switch (value) {
            case 'color':
              return true;
            case 'email':
              return true;
            case 'number':
              return true;
            case 'password':
              return true;
            case 'search':
              return true;
            case 'tel':
              return true;
            case 'text':
              return true;
            case 'time':
              return true;
            case 'url':
              return true;
            case 'week':
              return true;
            default:
              return false;
          }
        }
      case 'checkbox':
        return type === value;
      case 'date':
        {
          switch (value) {
            case 'date':
              return true;
            default:
              return false;
          }
        }
      case 'date-range':
        return type === value;
      case 'option':
        return type === value;
      case 'select':
        return type === value;
      case 'file':
        return type === value;
      default:
        return false;
    }
  }


  FieldArea(field: string): number {

    return 1;
  }


}
