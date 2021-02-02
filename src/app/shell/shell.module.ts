import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { StateService, ConfigService, NetworkService, AppPreloadingStrategy } from '../services';
import { ErrorComponent } from '../components/error/error.component';
import { BaseComponent } from '../components/base.component';
import { MaterialModule } from '../material/materials.module';
import { AuthGuardService } from '../guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeManagerComponent } from './components/theme/theme-manager.component';
import { ThemeManagerService } from './services/theme-manager.service';
import { StyleManagerService } from './services/style-manager.service';
import { NavigationService } from '../services/navigation.service';

@NgModule({
  declarations: [
    ShellComponent,
    NotFoundComponent,
    ErrorComponent,
    BaseComponent,
    HeaderComponent,
    ToolbarComponent,
    ThemeManagerComponent
  ],
  imports: [
    BrowserModule,
    ShellRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    NetworkService,
    StateService,
    ConfigService,
    AuthGuardService,
    AppPreloadingStrategy,
    ThemeManagerService,
    StyleManagerService,
    NavigationService
  ],
  bootstrap: [ShellComponent]
})
export class ShellModule { }
