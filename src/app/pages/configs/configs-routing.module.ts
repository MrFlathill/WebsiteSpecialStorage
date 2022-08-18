import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ConfigsComponent } from './configs.component';
import { ListBottomsComponent } from './configPages/list-bottoms/list-bottoms.component';
import { EditBottomsComponent } from './configPages/edit-bottoms/edit-bottoms.component';



const configsRoutes: Routes = [
  {path: 'configs', component: ConfigsComponent},
  {path: 'config/bottoms', component: ListBottomsComponent},
  {path: 'config/edit/bottoms', component: EditBottomsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(configsRoutes)
  ],
  exports: [RouterModule]
})
export class ConfigsRoutingModule { }
