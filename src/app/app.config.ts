import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
        
      }),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',// permite scroll a anclas
         
      }),
       
    ),
  ],
};
