import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { StatsComponent } from './components/stats/stats.component';
import { HomeComponent } from './views/home/home.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/intl/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    HeaderComponent,
    FooterComponent,
    VideoCardComponent,
    StatsComponent,
    HomeComponent,
    PlayerDetailsComponent,
    VideoDetailsComponent,
    BreadcrumbsComponent,
    
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
