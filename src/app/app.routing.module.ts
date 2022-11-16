import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowDogsComponent } from './components/show-dogs/show-dogs.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  
  //Definindo as rotas de acesso para os components
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShowDogsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
