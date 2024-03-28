// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// This is the main entry point of the application. It is used to bootstrap the application and launch it in the browser
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
