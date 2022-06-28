import { Injectable } from '@angular/core';
import { MetaDataReaderService } from '@app/shared/services/MetaDataReader.service';

@Injectable()
export class DocumentTypeMetaDataReaderService {

    constructor( private MetaDataReader_Service: MetaDataReaderService) { }

    getFormMetaData() {
        return this.MetaDataReader_Service.getFormMetaData("form_preferences_documentTypes");
    }
}