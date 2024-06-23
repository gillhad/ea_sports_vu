import { Injectable, inject } from '@angular/core';
import { IRequestPlayers } from '../interfaces/request-players';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { IPlayer } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestPlayerService {
  httpClient = inject(HttpClient);

  getPlayers(): Player[] {
    let players: Player[] = [];
    try {
      this.httpClient
        .get('../../assets/players.json')
        .subscribe((playerArray: Data) => {
          playerArray['players'].forEach((playerItem: IPlayer) => {
            players.push(new Player(playerItem));
          });
        });
    } catch (e) {
      console.log('hay algun error ', e);
      throw e;
    }
    return players;
  }
}
