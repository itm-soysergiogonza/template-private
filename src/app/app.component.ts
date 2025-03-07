import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
