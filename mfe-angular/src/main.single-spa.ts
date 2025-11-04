import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// ⬇️ exports nommés v9
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { NgZone } from '@angular/core'; // ⬅️ requis en v9 si pas zoneless

const lifecycles = singleSpaAngular({
  NgZone, // ⬅️ on utilise zone.js (pas 'noop')
  bootstrapFunction: () =>
    bootstrapApplication(AppComponent, {
      providers: [getSingleSpaExtraProviders()],
    }),
  template: '<app-root></app-root>',
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
