import { Injectable, inject } from '@angular/core';
import { IRequestPlayers } from '../interfaces/request-players';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { IPlayer } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestPlayerService implements IRequestPlayers{
  httpClient = inject(HttpClient)
 
   getPlayers(): Player[] {
    console.log("estoy gestionando el get players");
    const players:Player[] = [];
     this.httpClient.get<Player[]>("../../assets/players.json").subscribe(
      (playerArray:Data)=>{
        playerArray["players"].forEach((player:IPlayer)=>{
          players.push(new Player(player));
        })
      }
    );
    return players;
  }

  
}
