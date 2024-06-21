import { Component, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss'
})
export class PlayerDetailsComponent implements OnInit{
  playerRequest= inject(RequestPlayerService);
router = inject(Router);
activatedRoute = inject(ActivatedRoute)
  players: Player[] = [];


  ngOnInit(): void {
  this.players = this.playerRequest.getPlayers();
  console.log(this.players);
}

navigate(){
this.router.navigate(["videos"],{relativeTo:this.activatedRoute})
}

}
