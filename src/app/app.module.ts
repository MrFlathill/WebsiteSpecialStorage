import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Shared Module
import { SharedModule } from './shared/shared.module';

// Feature Module
import { ConfigsModule } from './pages/configs/configs.module';

import { AppComponent } from './app.component';

// ==COMPONENTS==
// Pages
import { HomeComponent } from './pages/home/home.component';
import { TankComponent } from './pages/tank/tank.component';
import { ConnectorsComponent } from './pages/connectors/connectors.component';
// Navigation bar
import { NavComponent } from './nav/nav.component';
// User
import { UserComponent } from './user/user.component';
// Services
import { BottomService } from './service/bottom.service';
import { TankLogicComponent } from './service/tank-logic/tank-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TankComponent,
    ConnectorsComponent,
    UserComponent,
    TankLogicComponent,
  ],
  imports: [
    // Root Module and Feature Module have to be import prior to Router Modules.
    BrowserModule,
    SharedModule,
    ConfigsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [
    BottomService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
