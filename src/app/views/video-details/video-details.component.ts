import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss'
})
export class VideoDetailsComponent {
router = inject(Router);
location = inject(Location);
media:string[];
  constructor(){
    this.media = this.router.getCurrentNavigation()?.extras.state?.['data'];
      }

  navigate(){
  this.location.back();
  }
}
