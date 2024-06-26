import { Injectable, inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { IBreadCrumbs } from '../interfaces/breadcrumbs.interface';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private router = inject(Router);

  breadcrumbs: IBreadCrumbs[] = [];

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(
          this.router.routerState.snapshot.root,
        );
      });
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: IBreadCrumbs[] = [],
  ): IBreadCrumbs[] {
    const children: ActivatedRouteSnapshot[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.url
        .map((segment) => segment.path)
        .join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      if (child.data['breadcrumb'] === null) {
        return this.createBreadcrumbs(child, url, breadcrumbs);
      }
      breadcrumbs.push({ label: child.data['breadcrumb'], url: url });
      this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
