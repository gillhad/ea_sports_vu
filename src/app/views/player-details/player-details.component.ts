import { Component, Input, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent {
  playerRequest = inject(RequestPlayerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  player?: Player;
  playerRandom?: Player;

  constructor() {
    this.player = this.router.getCurrentNavigation()?.extras.state?.['data'];
    console.log(this.player);
  }

  navigate() {
    this.router.navigate(['videos'], { relativeTo: this.activatedRoute });
  }
}
