import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MetaDataReaderService {

    metRootPath: string = "assets/forms-meta-data/";
    formData: any;

    constructor(private http: HttpClient) { }

    public getFormMetaData(fileName: string) {
        const path = this.metRootPath.concat(fileName).concat('.json');
        return this.http.get<any>(path)
    }
}