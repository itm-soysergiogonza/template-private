import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NbLayoutModule} from '@nebular/theme';
import {SidebarFixedComponent} from "./core/layout/sidebar-fixed/sidebar-fixed.component";
import {HeaderComponent} from './core/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NbLayoutModule, SidebarFixedComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
