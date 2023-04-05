import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter, map, Subscription } from 'rxjs';
import { NavItem } from './nav/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { menu } from './nav/menu';
import { Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  opened: boolean = true;
  private mediaWatcher: Subscription;
  menu: NavItem[] = menu;
  private routerEventSubscription: Subscription;
  isHideNav = false;

  subscriptions: Subscription[] = [];
  loggedIn = false;

  constructor(
    private translate: TranslateService,
    private media: MediaObserver,
    private router: Router,
  ) {
    this.menu = this.menu.filter(m => m.isActive);
    this.translate.setDefaultLang('en');

    this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
      this.handleMediaChange(mediaChange);
    });

    this.routerEventSubscription = this.router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .pipe(map((event: any) => {
        return event.state.root.firstChild.data['hideNav'];
      })).subscribe(hideNav => {
        this.isHideNav = hideNav ? hideNav : false;
      });
  }

  private handleMediaChange(mediaChange: MediaChange) {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }


  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
    if (this.routerEventSubscription)
      this.routerEventSubscription.unsubscribe();
  }
}
