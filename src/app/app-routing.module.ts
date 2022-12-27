import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaclienteComponent } from './vistacliente/vistacliente.component';
import { VistaadminComponent } from './vistaadmin/vistaadmin.component';


const routes: Routes = [
  {
    path: 'store',
    component: VistaclienteComponent
  },
  {
    path: 'admin',
    component: VistaadminComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
