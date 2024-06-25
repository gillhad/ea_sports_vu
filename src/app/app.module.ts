import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './views/home/home.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule } from './modules/core/core.module';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
export function HttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/intl/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    StatsComponent,
    HomeComponent,
    PlayerDetailsComponent,
    VideoDetailsComponent,
    SafeUrlPipe,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      })
  ],
  providers: [provideHttpClient(), {provide:ErrorHandler,useClass:GlobalErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
