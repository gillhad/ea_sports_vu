import { Component, Input, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IPlayer } from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent {
  playerRequest = inject(RequestPlayerService);
  router = inject(Router);
  location = inject(Location);
  activatedRoute = inject(ActivatedRoute);
  player?: Player;
  id: string = '';

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.playerRequest.getPlayerById('').subscribe((playerArray: Data) => {
      playerArray['players'].forEach((playerItem: IPlayer) => {
        if (playerItem.id === this.id) {
          this.player = new Player(playerItem);
        }
      });
    });
  }

  navigate() {
    this.router.navigate(['videos'], {
      relativeTo: this.activatedRoute,
      state: { data: this.player?.media },
    });
  }

  navigateBack() {
    this.location.back();
  }
}
