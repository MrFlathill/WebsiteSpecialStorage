import { NgModule } from '@angular/core';
// Shared Module
import { SharedModule } from './../../shared/shared.module';

// Configs Router
import { ConfigsRoutingModule } from './configs-routing.module'

// Components
import { ConfigsComponent } from './configs.component';
import { ListBottomsComponent } from './configPages/list-bottoms/list-bottoms.component';
import { EditBottomsComponent } from './configPages/edit-bottoms/edit-bottoms.component';


@NgModule({
  declarations: [
    ConfigsComponent,
    ListBottomsComponent,
    EditBottomsComponent,
  ],
  imports: [
    SharedModule,
    ConfigsRoutingModule,
  ],
  exports: [
    ConfigsComponent,
  ]
})
export class ConfigsModule { }
