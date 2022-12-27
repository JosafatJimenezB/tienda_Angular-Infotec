import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewStoreComponent } from './view-store/view-store.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { VistaclienteComponent } from './vistacliente/vistacliente.component';
import { VistaadminComponent } from './vistaadmin/vistaadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewStoreComponent,
    AdminComponent,
    NavComponent,
    VistaclienteComponent,
    VistaadminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
