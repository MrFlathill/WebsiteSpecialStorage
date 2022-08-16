import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ConfigsComponent } from './configs.component';


const configsRoutes: Routes = [
  {path: 'configs', component: ConfigsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(configsRoutes)
  ],
  exports: [RouterModule]
})
export class ConfigsRoutingModule { }
