import { Component, Inject, OnInit } from '@angular/core';
import {
  NB_WINDOW,
  NbButtonModule,
  NbContextMenuModule,
  NbMenuService, NbPosition,
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
    { title: 'Profile' },
   {
      title: 'Tema',
      children: [
        { title: 'Claro' },
        { title: 'Oscuro' },
        { title: 'Sistema' },
      ],
   },
    { title: 'Logout' },

  ];

  constructor(private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window: Window) {
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  protected readonly NbPosition = NbPosition;
}
