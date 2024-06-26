import { Component, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private playerService = inject(RequestPlayerService);
  players: Player[] = [];

  ngOnInit(): void {
    const players = this.playerService.getPlayers();
    of(players).subscribe(playersObservable => {
      this.players = playersObservable;
    });
  }
}
