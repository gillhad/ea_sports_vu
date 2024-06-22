import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/lenguage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {} 

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language); 
  }
}
