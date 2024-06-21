import { Injectable } from "@angular/core";
import { Player } from "../models/player";

@Injectable()
export abstract class IRequestPlayers {
    abstract getPlayers():Player[];
}
