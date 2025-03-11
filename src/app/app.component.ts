import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarFixedComponent } from './core/layout/sidebar-fixed/sidebar-fixed.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NbLayoutModule,
    SidebarFixedComponent,
    HeaderComponent,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
