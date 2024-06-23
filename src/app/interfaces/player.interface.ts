import { Stats } from "./stats.interface";

export interface IPlayer {
    id:string;
    name:string;
    image1:string;
    image2:string;
    stats:Stats[];
    media:string[];
}
