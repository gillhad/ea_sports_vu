import { Component, Input } from '@angular/core';
import { Stats } from '../../interfaces/stats.interface';
import { transition } from '@angular/animations';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  @Input() stat?: Stats;

  

  getWidth() {
    return {
      width: (this.stat!.value / 100) * 200 + 'px',
  
    };
  }

  getBar() {
    if (this.stat!.value > 90) {
      return 'colored-bar-green';
    } else if (this.stat!.value > 80) {
      return 'colored-bar-yellow';
    } else if (this.stat!.value > 70) {
      return 'colored-bar-orange';
    } else {
      return 'colored-bar-red';
    }
  }

  getLabel() {
    if (this.stat!.value > 90) {
      return 'label-green';
    } else if (this.stat!.value > 80) {
      return 'label-yellow';
    } else if (this.stat!.value > 70) {
      return 'label-orange';
    } else {
      return 'label-red';
    }
  }
}
