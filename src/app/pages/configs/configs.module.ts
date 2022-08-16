import { NgModule } from '@angular/core';
// Shared Module
import { SharedModule } from './../../shared/shared.module';

// Configs Router
import { ConfigsRoutingModule } from './configs-routing.module'

// Components
import { ConfigsComponent } from './configs.component';


@NgModule({
  declarations: [
    ConfigsComponent,
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
