import { Injectable } from "@angular/core";
import { Player } from "../models/player";
import { Observable } from "rxjs";

@Injectable()
export abstract class IRequestPlayers {
    abstract getPlayers():Player[];
    abstract getPath():void;
    abstract getPlayerById(id: string): Observable<Player[]>
}
