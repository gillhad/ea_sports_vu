import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LogLevels } from '../models/log-levels';

@Injectable({
  providedIn: 'platform'
})
export class LoggerService {

  logLevel: LogLevels = new LogLevels();
 
 
  info(msg: string) {
    this.logWith(this.logLevel.Info, msg);
  }

  warn(msg: string) {
    this.logWith(this.logLevel.Warn, msg);
  }

  error(msg: string) {
    this.logWith(this.logLevel.Error, msg);
  }

  private logWith(levels: number, msg: string) {
    if (!environment.production) {
      if (levels <= this.logLevel.Error) {
        switch (levels) {
          case this.logLevel.None:
            return console.log(msg);
          case this.logLevel.Info:
        
            return console.info('%c' + msg, 'color: #6495ED');
          case this.logLevel.Warn:
          
            return console.warn('%c' + msg, 'color: #FF8C00');
          case this.logLevel.Error:
           
            return console.error('%c' + msg, 'color: #DC143C');
          default:
            console.debug(msg);
        }
      }
    }
  }



}
