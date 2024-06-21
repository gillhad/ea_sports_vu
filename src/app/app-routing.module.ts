import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PlayerDetailsComponent } from './views/player-details/player-details.component';
import { VideoDetailsComponent } from './views/video-details/video-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:"home",
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    },
    children: [
      {
        path: 'details',
        component: PlayerDetailsComponent,
        data: {
          breadcrumb: 'Details',
        },
        children: [
          {
            path: 'videos',
            component: VideoDetailsComponent,
            data: {
              breadcrumb: 'Videos',
            },
          },
        ],
      },
    ],
  },
//   {
//     path:"details",component:PlayerDetailsComponent
//   ,data:{
// "breadcrumb":"details"
//   }
//   },
  {path:"**",component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
