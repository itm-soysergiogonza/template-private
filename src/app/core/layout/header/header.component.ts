import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbUserModule,
} from '@nebular/theme';
import { env as environment } from '../../../../environments';
import { ContextMenuClickComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    NbEvaIconsModule,
    NgOptimizedImage,
    NbContextMenuModule,
    NbSecurityModule,
    ContextMenuClickComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoURL: string = environment.logoUrl;
}
