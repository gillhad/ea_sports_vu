import { Component, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IPlayer } from '../../interfaces/player.interface';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent implements OnInit{
  private playerRequest = inject(RequestPlayerService);
  private router = inject(Router);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private logger = inject(LoggerService);

  player?: Player;
  id: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    
    console.log("aaaaa");
    this.playerRequest.getPlayerById(this.id).subscribe((player: Player) => {
      console.log("recibimos el player", player);
      this.player = player;
    });
    console.log("acabamos de gestionar el player");
  }

  navigate() {
    this.logger.info('navigate to videos');
    this.router.navigate(['videos'], {
      relativeTo: this.activatedRoute,
      state: { data: this.player?.media },
    });
  }

  navigateBack() {
    this.location.back();
  }
}
