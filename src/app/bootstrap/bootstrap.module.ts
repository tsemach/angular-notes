import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { BootstrapComponent } from './bootstrap.component';
import { NavbarDropdownLinkComponent } from './navbar-dropdown-link/navbar-dropdown-link.component';

const appRoutes: Routes = [
  { path: 'bootstrap', 'component': BootstrapComponent },
];

@NgModule({
  declarations: [
    BootstrapComponent,
    // BootstrapSubMenuComponent,
    BootstrapComponent,
    NavbarDropdownLinkComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatCheckboxModule,
  ],
  exports: [RouterModule]
})
export class AppBootstrapModule {
}
