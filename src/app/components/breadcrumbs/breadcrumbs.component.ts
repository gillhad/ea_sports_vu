import { Component, OnInit, inject } from '@angular/core';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';
import { Router } from '@angular/router';
import { IBreadCrumbs } from '../../interfaces/breadcrumbs.interface';
import { LoggerService } from '../../services/logger.service';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit{
logger = inject(LoggerService);

  breadcrumbs: Array<{ label: string, url: string }> = [];
  private breadcrumbService = inject(BreadcrumbsService)
  private router = inject(Router)
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    });
  }

  navigate(bread:IBreadCrumbs){
    this.logger.info("breadcrumb navigation");
    let url = bread.url;
    if(bread.param!=undefined){
          url+="/"+bread.param;
    }
    this.router.navigate([url])
  }

}
