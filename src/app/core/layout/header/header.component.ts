import { Component } from '@angular/core';
import {NbActionsModule, NbLayoutModule, NbUserModule} from "@nebular/theme";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NbLayoutModule,
    NbActionsModule,
    NbUserModule,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
