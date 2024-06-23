import { IPlayer } from "../interfaces/player.interface";
import { Stats } from "../interfaces/stats.interface";

export class Player implements IPlayer{
    id: string;
    name: string;
    image1: string;
    image2: string;
    stats: Stats[];
    media: string[];
    
    constructor(player:IPlayer){
        this.id = player.id;
        this.name= player.name;
        this.image1 = player.image1;
        this.image2= player.image2;
        this.stats = player.stats;
        this.media = player.media;
    }
    
}
