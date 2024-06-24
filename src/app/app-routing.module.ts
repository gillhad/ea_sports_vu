import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'home',
    },
  },
  {
    path: 'details',
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: ':id',
        component: PlayerDetailsComponent,
        data: {
          breadcrumb: 'details',
          id: true,
        },
        
      },
    ],
  },
  {
    path: 'details/:id/videos',
    component: VideoDetailsComponent,
    data: {
      breadcrumb: 'videos',
    },
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
