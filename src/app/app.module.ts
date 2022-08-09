import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// All Angular Material Imports

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Other

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule, BadgeModule } from 'ng-cdbangular';
import { HttpClientModule } from '@angular/common/http';

// ==COMPONENTS==
// Pages
import { HomeComponent } from './pages/home/home.component';
import { TankComponent } from './pages/tank/tank.component';
import { ConnectorsComponent } from './pages/connectors/connectors.component';
import { ConfigsComponent } from './pages/configs/configs.component';
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
    ConfigsComponent,
    UserComponent,
    TankLogicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    // Angular Material:
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatCheckboxModule,
    // Other:
    FlexLayoutModule,
    BrowserAnimationsModule,
    SidebarModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BottomService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
