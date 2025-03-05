import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarService,
  NbUserModule,
} from '@nebular/theme';
import { env as environment } from '../../../../environments';

@Component({
  selector: 'app-header',
  imports: [
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    NbEvaIconsModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoURL: string = environment.logoUrl;
  constructor(private _sidebarService: NbSidebarService) {}

  toggle() {
    this._sidebarService.toggle();
  }
}
