import { ErrorHandler, Injectable, inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{
  private logger = inject(LoggerService)

  handleError(error: any): void {
    this.logger.error(error);
  }

 
}
