import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { CollectionPage } from './pages/collection/collection.page';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  {
    path: "",
    component: LoginPage
  },
  {
    path: "pokedex",
    component: CollectionPage
  },
  {
    path: "catalogue",
    component: CataloguePage

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
