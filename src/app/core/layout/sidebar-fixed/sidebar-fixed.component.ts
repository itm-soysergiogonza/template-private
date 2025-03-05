import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule, NbMenuItem,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';

@Component({
  selector: 'nb-sidebar-fixed',
  imports: [
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbIconModule,
    NbMenuModule
  ],
  templateUrl: './sidebar-fixed.component.html',
  styleUrl: './sidebar-fixed.component.scss'
})

export class SidebarFixedComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      home: true
    },
    {
      title: 'FEATURES',
      group: true,
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
        }
      ]
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
      link: '/settings'
    }
  ];
}
