import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { CONSTANTS } from '@shared/app.constants';
import { MiscService } from '@shared/services/misc/misc.service';

@Injectable()
export class HttpService {
  constructor(
    private miscService: MiscService
  ) {}

  getRequest(url: string, queryParams?: any, pathParams?: any, showLoader = true, options?: any) {
    let apiUrl = CONSTANTS + url;
    apiUrl = this.replaceParamsWithValues(apiUrl, pathParams);
    apiUrl = this.addQueryParamsToUrl(apiUrl, queryParams);
    if (showLoader) {
      this.miscService.showLoader();
    }
    return new Observable((obs) => {
      axios
        .get(apiUrl)
        .then((response) => {
          if (showLoader) {
            this.miscService.hideLoader();
          }
          if (response.data) {
            obs.next(response.data);
            obs.complete();
          } else {
            obs.error();
            obs.complete();
            this.miscService.handleError();
          }
        })
        .catch((error) => {
          obs.error();
          obs.complete();
          const message =
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message;
          if (showLoader) {
            this.miscService.hideLoader();
          }
          this.miscService.handleError();
        });
    });
  }
  postRequest(url: string, data: any, pathParams?: any, isMultipart = false) {
    let apiUrl = CONSTANTS + url;
    this.miscService.showLoader();
    apiUrl = this.replaceParamsWithValues(apiUrl, pathParams);

    let formData = data;
    formData = this.setCommonParams(formData);
    if (isMultipart) {
      formData = this.convertToFormData(data);
    }
    return new Observable((obs) => {
      axios
        .post(apiUrl, formData)
        .then((response) => {
          console.log(response);
          this.miscService.hideLoader();
          if (response) {
            this.miscService.handleSuccess("Successfully Saved");
            obs.next(response.data);
            obs.complete();
          } else {
            obs.error();
            obs.complete();
            this.miscService.handleError();
          }
        })
        .catch((error) => {
          obs.error();
          obs.complete();
          const message =
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : error.message;
          this.miscService.hideLoader();
          this.miscService.handleError();
        });
    });
  }
  putRequest(url: string, data: any, pathParams?: any, isMultipart = false) {
    let apiUrl = CONSTANTS + url;
    apiUrl = this.replaceParamsWithValues(apiUrl, pathParams);
    this.miscService.showLoader();
    let formData = data;
    formData = this.setCommonParams(formData);
    if (isMultipart) {
      formData = this.convertToFormData(data);
    }
    return new Observable((obs) => {
      axios
        .put(apiUrl, formData)
        .then((response) => {
          console.log(response);
          this.miscService.hideLoader();
          if (response) {
            this.miscService.handleSuccess("Successfully Updated");
            obs.next(response.data);
            obs.complete();
          } else {
            obs.error();
            obs.complete();
            this.miscService.handleError();
          }
        })
        .catch((error) => {
          obs.error();
          obs.complete();
          this.miscService.hideLoader();
          this.miscService.handleError();
        });
    });
  }
  deleteRequest(url:any, data:any, pathParams?: any, isMultipart = false) {
    let apiUrl = CONSTANTS + url;
    apiUrl = this.replaceParamsWithValues(apiUrl, pathParams);
    
    this.miscService.showLoader();
    let formData = data;
    formData = this.setCommonParams(formData);
    if (isMultipart) {
      formData = this.convertToFormData(data);
    }
    return new Observable((obs) => {
      axios
        .delete(apiUrl, { data: formData })
        .then((response) => {
          console.log(response);
          this.miscService.hideLoader();
          if (response) {
            this.miscService.handleSuccess("SuccessFully Deleted");
            obs.next(response.data);
            obs.complete();
          } else {
            obs.error();
            obs.complete();
            this.miscService.handleError();
          }
        })
        .catch((error) => {
          obs.error();
          obs.complete();
          this.miscService.hideLoader();
          this.miscService.handleError();
        });
    });
  }
  addQueryParamsToUrl(url:any, queryParams:any) {
    if (queryParams && Object.keys(queryParams).length > 0) {
      let toReturn = url + '?';
      Object.keys(queryParams).forEach((key, index, arr) => {
        toReturn += `${key}=${queryParams[key]}`;
        toReturn += index === arr.length - 1 ? '' : '&';
      });
      return toReturn;
    }
    return url;
  }
  convertToFormData(data:any) {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  }
  replaceParamsWithValues(url:any, data:any) {
    data = data ?? {};
    data['porOrgacode'] = "this.userSerivce.getPorOrgacode()";
    if (data && Object.keys(data).length > 0) {
      Object.keys(data).forEach((k) => {
        url = url.replace(`{${k}}`, data[k]);
      });
    }
    return url;
  }

  setCommonParams(data: any = {}) {
    data = data ?? {};
    data['porOrgacode'] = "this.userSerivce.getPorOrgacode()";
    return data;
  }
}
