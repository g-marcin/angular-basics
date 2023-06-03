import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './modules/exchange/exchange.component';
import { AdminComponent } from './modules/admin/admin.component';
const routes: Routes = [
  { path: '', component: ExchangeComponent },
  { path: 'admin', component: AdminComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
