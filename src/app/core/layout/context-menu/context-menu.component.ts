import { Component, Inject, OnInit } from '@angular/core';
import {
  NB_WINDOW,
  NbButtonModule,
  NbContextMenuModule,
  NbMenuService, NbPosition,
  NbThemeService,
  NbUserModule,
} from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'nb-context-menu',
  templateUrl: './context-menu.component.html',
  imports: [NbContextMenuModule, NbButtonModule, NbUserModule],
  styleUrl: './context-menu.component.scss',
})
export class ContextMenuClickComponent implements OnInit {
 items = [
  { title: 'Profile', icon: 'person-outline' },
  {
    title: 'Tema',
    icon: 'color-palette-outline',
    children: [
      { title: 'Claro', icon: 'sun-outline' },
      { title: 'Oscuro', icon: 'moon-outline' },
      { title: 'Sistema', icon: 'monitor-outline' },
    ],
  },
  { title: 'Logout', icon: 'log-out-outline' },
];

  constructor(
    private nbMenuService: NbMenuService,
    private _themeService: NbThemeService,
  @Inject(NB_WINDOW) private window: Window
  ) {
  }


  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => {
        switch (title) {
          case 'Claro':
            this._themeService.changeTheme('default');
            break;
          case 'Oscuro':
            this._themeService.changeTheme('cosmic');
            break;
          case 'Sistema': {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            this._themeService.changeTheme(prefersDark ? 'cosmic' : 'default');
            break;
          }
          default:
            this.window.alert(`${title} was clicked!`);
            break;
        }
      });
  }

  protected readonly NbPosition = NbPosition;
}
