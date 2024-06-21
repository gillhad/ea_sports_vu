import { Injectable, Pipe } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log("hay cambios en breadcrumbs");
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
      // breadcrumbs.push({label:"Home",url:""})
    if (children.length === 0) {
      // console.log(breadcrumbs)
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      console.log(child);
console.log(child.snapshot.data['breadcrumb']);
      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      console.log("creamos breadcrum,",breadcrumbs);
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
