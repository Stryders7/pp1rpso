import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listar-autos',
    pathMatch: 'full'
  },
  {
    path: 'listar-autos',
    loadChildren: () => import('./listar-autos/listar-autos.module').then( m => m.ListarAutosPageModule)
  },
  {
    path: 'crear-vehiculo',
    loadChildren: () => import('./crear-vehiculo/crear-vehiculo.module').then( m => m.CrearVehiculoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
