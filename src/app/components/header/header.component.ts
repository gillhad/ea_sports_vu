import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
router =inject(Router)
activatedRoute = inject(ActivatedRoute);

  navigate(){
this.router.navigate(['/details'],{relativeTo:this.activatedRoute})
  }
}
