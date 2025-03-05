import {
  type ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    NbThemeModule.forRoot({ name: 'cosmic' }).providers || [],
    NbSidebarModule.forRoot().providers || [],
    NbMenuModule.forRoot().providers || [],
  ],
};
