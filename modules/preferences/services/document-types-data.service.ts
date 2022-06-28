import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentTypeMetaDataReaderService } from './document-types-metaReader.service';
@Injectable()
export class DocumentTypeDataService {


    MetaData: any;

    constructor(private service: DocumentTypeMetaDataReaderService) {

    }

   
}