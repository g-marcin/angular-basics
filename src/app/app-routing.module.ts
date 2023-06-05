import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { DetailsComponent } from './modules/details/details.component';
import { ExchangeComponent } from './modules/exchange/exchange.component';

const routes: Routes = [
  { path: '', component: ExchangeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
