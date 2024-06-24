import { Injectable, inject } from '@angular/core';
import { IRequestPlayers } from '../interfaces/request-players.interface';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { IPlayer } from '../interfaces/player.interface';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestPlayerService implements IRequestPlayers {
  httpClient = inject(HttpClient);

  path = '../../assets/players.json';

  constructor() {
    this.getPath();
  }

  getPath() {
    this.path = CryptoJS.AES.decrypt(
      environment.path,
      environment.apiKey,
    ).toString(CryptoJS.enc.Utf8);
  }

  getPlayers(): Player[] {
    let players: Player[] = [];
    players = [];
    try {
      this.httpClient.get(this.path).subscribe((playerArray: Data) => {
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

  getPlayerById(id: string): Observable<Player[]> {
    try {
      return this.httpClient.get<Player[]>('../../assets/players.json');
    } catch (e) {
      console.log('hay algun error ', e);
      throw e;
    }
  }
}
