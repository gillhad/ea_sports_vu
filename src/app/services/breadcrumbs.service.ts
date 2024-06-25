import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IBreadCrumbs } from '../interfaces/breadcrumbs.interface';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  breadcrumbs: IBreadCrumbs[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadCrumbs[] = [],
  ): IBreadCrumbs[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.snapshot.data['breadcrumb'] === null) {
        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
      
      if(child.routeConfig?.path=="**"){
        breadcrumbs.push({ label: 'home', url: '' });
        breadcrumbs.push({ label: '', url: '' });
        return breadcrumbs;
      }

      if (
        breadcrumbs.length === 0 &&
        child.snapshot.data['breadcrumb'] != 'home'
      ) {
        breadcrumbs.push({ label: 'home', url: '' });
      }

      child.snapshot.url.forEach((segment) => {
        const routeUrl = '/' + segment.path;
        if (child.snapshot.data['id']) {
          breadcrumbs.push({
            label: child.snapshot.data['breadcrumb'],
            url: routeUrl,
            param: segment.path,
          });
        } else {
          if (isNaN(parseInt(segment.path))) {
            breadcrumbs.push({ label: segment.path, url: routeUrl });
          } else {
            breadcrumbs.at(-1)!.param = segment.path;
          }
        }
      });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
