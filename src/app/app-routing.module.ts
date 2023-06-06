import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, DetailsComponent, ExchangeComponent } from './pages';

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
