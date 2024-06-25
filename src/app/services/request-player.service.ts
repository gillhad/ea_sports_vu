import { Injectable, inject } from '@angular/core';
import { IRequestPlayers } from '../interfaces/request-players.interface';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { IPlayer } from '../interfaces/player.interface';
import { Observable, map } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class RequestPlayerService implements IRequestPlayers {
  private httpClient = inject(HttpClient);
  private logger = inject(LoggerService);

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
      this.logger.error('hay algun error '+ e);
      throw e;
    }
    return players;
  }

  getPlayerById(id:string): Observable<Player> {
    console.log("gestionamos el getpLayer")
    try {
      return this.httpClient.get<Player[]>('../../assets/players.json')
      .pipe(
        map((response:Data)=>{
           const player =  response['players']!.find((player:Player)=>player.id === id);
           if(!player){
            console.log("error 1");
            throw new Error("not found");
           }
           return player;
        })
      );
    } catch (e) {
      console.log("error 2")
      this.logger.error('hay algun error '+ e);
      throw e;
    }
  }
}
