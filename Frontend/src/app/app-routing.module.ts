import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'random', loadChildren: () => import('./components/randomrecipe/randomrecipe.module').then(m => m.RandomrecipeModule) },
  { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'category', loadChildren: () => import('./components/category/category.module').then(m => m.CategoryModule) },
  { path: 'recipe', loadChildren: () => import('./components/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'recipelist', loadChildren: () => import('./components/recipelist/recipelist.module').then(m => m.RecipelistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
