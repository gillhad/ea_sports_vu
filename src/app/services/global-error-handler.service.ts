import { ErrorHandler, Injectable, OnInit, inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { Data } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './lenguage.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{
  private logger = inject(LoggerService);
  private httpClient = inject(HttpClient);
  private translate = inject(TranslateService);
  private path:string = "../assets/intl/";
  json:Data = {};

  constructor(){
    const browserLang = this.translate.getBrowserLang() || 'en';
    const jsonPath =  this.path+browserLang+".json";
    this.httpClient.get(jsonPath).subscribe((res)=>{
      this.json = res;
    });
  }


  handleError(error: any): void {
    this.logger.error(this.json["basic_error"]+ error);
  }



 
}
