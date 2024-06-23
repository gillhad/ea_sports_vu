import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  @Input() player!: Player;
  showError = false;

  constructor(private router: Router) {}

  onImageClick(): void {
    console.log('navigation', this.player);
    this.router.navigate(['/details'], {
      state: { data: this.player },
    });
  }

  handleError(event: Event): void {
    this.showError = true;
  }
}
