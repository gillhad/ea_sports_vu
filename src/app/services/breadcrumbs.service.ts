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
      this.breadcrumbs =  this.createBreadcrumbs(this.activatedRoute.root);
      
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;
    
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if(breadcrumbs.length===0 && child.snapshot.data['breadcrumb']!="home"){
        breadcrumbs.push({label:"home",url:""});
      }
      console.log(child.snapshot.url)
      child.snapshot.url.forEach((segment)=>{
        const routeUrl = "/"+segment.path;
        breadcrumbs.push({label: segment.path, url: routeUrl });
        console.log(breadcrumbs);
      })
      // const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      // if (routeURL !== '') {
      //   url += `/${routeURL}`;
      // }
      // console.log(child);
      // breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
