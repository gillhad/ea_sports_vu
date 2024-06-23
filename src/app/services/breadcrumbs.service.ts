import { Injectable, Pipe } from '@angular/core';
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
      .pipe(filter((event: any) => event instanceof NavigationEnd))
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
      if (
        breadcrumbs.length === 0 &&
        child.snapshot.data['breadcrumb'] != 'home'
      ) {
        breadcrumbs.push({ label: 'home', url: '' });
      }

      child.snapshot.url.forEach((segment) => {
        if (isNaN(parseInt(segment.path))) {
          const routeUrl = '/' + segment.path;
          breadcrumbs.push({ label: segment.path, url: routeUrl });
        } else {
          breadcrumbs.at(-1)!.param = segment.path;
        }
      });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
