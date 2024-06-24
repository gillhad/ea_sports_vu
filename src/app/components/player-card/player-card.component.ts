import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  logger = inject(LoggerService);
  router = inject(Router);
  @Input() player!: Player;
  showError = false;


  onImageClick(): void {
    this.logger.info("move to details");
    this.router.navigate(['/details/'+this.player.id], {
    });
  }

  handleError(event: Event): void {
    this.showError = true;
  }
}
