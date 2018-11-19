import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

const routes: Routes = [{ path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Heroes', component: HeroesComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Detial/:?id', component: HeroDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
