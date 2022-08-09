import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { HomeComponent } from './pages/home/home.component';
import { TankComponent } from './pages/tank/tank.component';
import { ConnectorsComponent } from './pages/connectors/connectors.component';
import { ConfigsComponent } from './pages/configs/configs.component';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tank/new', component: TankComponent},
  {path: 'tank/:id', component: TankComponent},
  {path: 'connectors', component: ConnectorsComponent},
  {path: 'connectors/:id', component: ConnectorsComponent},
  {path: 'configs', component: ConfigsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
