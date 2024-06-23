import { Component, OnInit, inject } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit{
  breadcrumbs: Array<{ label: string, url: string }> = [];
  private breadcrumbService = inject(BreadcrumbsService)
  private router = inject(Router)
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.breadcrumbs = this.breadcrumbService.breadcrumbs;
      // console.log("he recibido ",this.breadcrumbs);
    });
  }

}
