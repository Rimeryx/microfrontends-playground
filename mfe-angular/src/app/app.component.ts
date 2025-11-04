import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding:16px">
      <h3>Micro-app Angular ✅</h3>
      <p>Montée via single-spa depuis le shell.</p>
    </div>
  `,
})
export class AppComponent {}
