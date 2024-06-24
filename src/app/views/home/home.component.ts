import { Component, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { of } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  playerService = inject(RequestPlayerService);
  logger = inject(LoggerService);
  players: Player[] = [];

  constructor() {}

  ngOnInit(): void {
    const players = this.playerService.getPlayers();
    of(players).subscribe(playersObservable => {
      this.players = playersObservable;
    });
  }
}
