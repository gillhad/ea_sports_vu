import { Component, Input, OnInit, inject } from '@angular/core';
import { RequestPlayerService } from '../../services/request-player.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent implements OnInit {
  playerRequest = inject(RequestPlayerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  @Input() player?:Player;
  playerRandom?:Player;
  

  ngOnInit(): void {
    this.player = new Player({
      "name": "Lionel Messi",
      "image1": "",
      "image2": "",
      "stats": [
        {
          "name": "pace",
          "value": 80
        },
        {
          "name": "shooting",
          "value": 87
        },
        {
          "name": "passing",
          "value": 90
        },
        {
          "name": "dribling",
          "value": 94
        },
        {
          "name": "defending",
          "value": 33
        },
        {
          "name": "physycal",
          "value": 64
        }
      ],
      "media": [
        "https://www.youtube.com/embed/K7ylwMki3mw?si=OGdGcr9Js2Z68_p0",
        "https://www.youtube.com/embed/2zfzaoioxQg?si=mx8AXKi6sRaCUPXB",
        "https://www.youtube.com/embed/rQ7IWWKlPxA?si=zK-p1k6JsCAutSxi",
        "https://www.youtube.com/embed/MEWSjzw2jVw?si=Tbttp5wLzKBcoWDo"
      ]
    })
  }

  navigate() {
    this.router.navigate(['videos'], { relativeTo: this.activatedRoute });
  }
}
