import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/lenguage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languageService = inject(LanguageService)
  isDev:boolean = false;
  constructor() {
    this.isDev = !environment.production;
  } 

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language); 
  }

  mockError(){
    throw Error;
  }
}
