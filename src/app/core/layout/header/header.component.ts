import { Component } from '@angular/core';
import {NbActionsModule, NbIconModule, NbLayoutModule, NbSidebarService, NbUserModule} from "@nebular/theme";
import {NbEvaIconsModule} from '@nebular/eva-icons';

@Component({
  selector: 'app-header',
  imports: [
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _sidebarService: NbSidebarService) {
  }

  toggle() {
    this._sidebarService.toggle();
  }
}
