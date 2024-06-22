import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);

  constructor() {
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}