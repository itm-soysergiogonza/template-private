import {
  type ApplicationConfig,
  EnvironmentProviders,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { routes } from './app.routes';

const NEBULAR_MODULES: (Provider | EnvironmentProviders)[] | undefined = [
  NbThemeModule.forRoot({ name: 'default' }).providers || [],
  NbSidebarModule.forRoot().providers || [],
  NbMenuModule.forRoot().providers || [],
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    ...NEBULAR_MODULES,
    BrowserAnimationsModule,
  ],
};
