import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuItem,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';

@Component({
  selector: 'nb-sidebar-fixed',
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbIconModule,
    NbMenuModule,
  ],
  templateUrl: './sidebar-fixed.component.html',
  styleUrl: './sidebar-fixed.component.scss',
  animations: [
    trigger('collapseAnimation', [
      state('expanded', style({ width: '250px' })),
      state('collapsed', style({ width: '80px' })),
      transition('expanded <=> collapsed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class SidebarFixedComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      home: true,
    },
    {
      title: 'Users',
      icon: 'people-outline',
      children: [
        {
          title: 'User List',
          link: '/users/list',
        },
        {
          title: 'User Profile',
          link: '/users/profile',
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
      link: '/settings',
    },
  ];

  constructor(private _sidebarService: NbSidebarService) {}

  isCollapsed = false;

  toggle() {
    this._sidebarService.toggle(true);
    this.isCollapsed = !this.isCollapsed;
    return false;
  }
}
