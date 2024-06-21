import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';

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
    component: PlayerDetailsComponent,
     data: {
          breadcrumb: 'details',
        },
    children: [
      // {
      //   path:"",
      //   component: PlayerDetailsComponent,
      //   // data: {
      //   //   breadcrumb: 'details',
      //   // },
      // },
      
    
    ],
  },
  {
    path: 'details/videos',
    component:VideoDetailsComponent,
    data: {
      breadcrumb: 'videos',
    }
    
  },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
