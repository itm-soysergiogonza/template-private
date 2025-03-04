import { Component } from '@angular/core';
import {NbActionsModule, NbLayoutModule, NbUserModule} from "@nebular/theme";

@Component({
  selector: 'app-header',
  imports: [
    NbLayoutModule,
    NbActionsModule,
    NbUserModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
