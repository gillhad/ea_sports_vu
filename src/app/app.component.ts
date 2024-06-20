import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ea_sports_vu';

  translator = inject(TranslateService);

constructor(){
this.translator.setDefaultLang('es')
}
}
