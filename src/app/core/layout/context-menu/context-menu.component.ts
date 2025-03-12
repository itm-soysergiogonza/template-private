import {Component, Inject, OnInit} from '@angular/core';
import {
  NB_WINDOW,
  NbButtonModule,
  NbContextMenuModule, NbMenuBag,
  NbMenuService,
  NbPosition,
  NbThemeService,
  NbUserModule,
} from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

type ThemeOption = 'default' | 'cosmic' | 'system';

@Component({
  selector: 'nb-context-menu',
  templateUrl: './context-menu.component.html',
  standalone: true,
  imports: [NbContextMenuModule, NbButtonModule, NbUserModule],
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuClickComponent implements OnInit {
  items = [
    { title: 'Profile', icon: 'person-outline' },
    {
      title: 'Theme',
      icon: 'color-palette-outline',
      children: [
        { title: 'Light', icon: 'sun-outline' },
        { title: 'Dark', icon: 'moon-outline' },
        { title: 'System', icon: 'monitor-outline' },
      ],
    },
    { title: 'Logout', icon: 'log-out-outline' },
  ];

  public ProfilePhoto = 'https://campusvirtual.itm.edu.co/pluginfile.php/1/theme_space/customloginlogo/1741214146/1LOGO%20AZUL%2080%20copia.png';

  constructor(
    private _nbMenuService: NbMenuService,
    private _themeService: NbThemeService,
    @Inject(NB_WINDOW) private window: Window
  ) {}

  ngOnInit() {
    this._initializeTheme();
    this._setupMenuListeners();
    this._setupSystemThemeListener();
  }

  private _initializeTheme(): void {
    const savedTheme = localStorage.getItem('user-theme');

    if (!savedTheme) {
      localStorage.setItem('user-theme', 'system');
      this._handleSystemTheme();
    } else {
      if (savedTheme === 'system') {
        this._handleSystemTheme();
      } else {
        this._themeService.changeTheme(savedTheme as ThemeOption);
      }
    }
  }

  private _handleSystemTheme(): void {
    const prefersDark:boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme: "default" | "cosmic" = prefersDark ? 'cosmic' : 'default';
    this._themeService.changeTheme(theme);
  }

  private _setupSystemThemeListener(): void {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        if (localStorage.getItem('user-theme') === 'system') {
          const newTheme: "cosmic" | "default" = event.matches ? 'cosmic' : 'default';
          this._themeService.changeTheme(newTheme);
        }
      });
  }

  private _setupMenuListeners(): void {
    this._nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }:NbMenuBag):boolean => tag === 'my-context-menu'),
        map(({ item: { title } }:NbMenuBag):string => title),
      )
      .subscribe(title => {
        switch (title) {
          case 'Light':
            this._changeAndSaveTheme('default');
            break;
          case 'Dark':
            this._changeAndSaveTheme('cosmic');
            break;
          case 'System':
            localStorage.setItem('user-theme', 'system');
            this._handleSystemTheme();
            break;
          default:
            this.window.alert(`${title} was clicked!`);
            break;
        }
      });
  }

  private _changeAndSaveTheme(theme: ThemeOption): void {
    this._themeService.changeTheme(theme);
    localStorage.setItem('user-theme', theme);
  }

  protected readonly NbPosition: typeof NbPosition = NbPosition;
}
