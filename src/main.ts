import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode(); // Angular Build in Production with compression
}

// Bootstap the Angular Application in the browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
