import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { HomeComponent } from './pages/home/home.component';
import { TankComponent } from './pages/tank/tank.component';
import { ConnectorsComponent } from './pages/connectors/connectors.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tank/new', component: TankComponent},
  {path: 'tank/:id', component: TankComponent},
  {path: 'connectors', component: ConnectorsComponent},
  {path: 'connectors/:id', component: ConnectorsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
