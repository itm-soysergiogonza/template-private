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
  NbTooltipModule,
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
    NbTooltipModule,
  ],
  templateUrl: './sidebar-fixed.component.html',
  styleUrl: './sidebar-fixed.component.scss',
  animations: [
    trigger('collapseAnimation', [
      state('expanded', style({ width: '240px' })),
      state('collapsed', style({ width: '80px' })),
      transition('expanded <=> collapsed', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class SidebarFixedComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: '/users',
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
      link: '/settings',
    },
  ];
}
