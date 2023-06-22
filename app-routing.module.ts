import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule} from '@angular/router';
import { RouterLink } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then( m => m.GraphPage)
  },
  {
    path: 'file',
    loadComponent: () => import('./file/file.page').then( m => m.FilePage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
  {
    path: 'interfacepage',
    loadComponent: () => import('./interfacepage/interfacepage.page').then( m => m.InterfacepagePage)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), RouterLink
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}