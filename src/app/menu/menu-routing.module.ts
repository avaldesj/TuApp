import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { LoginPageModule } from '../login/login.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: "home",
        loadChildren:()=> 
        import("../home/home.module").then(m => m.HomePageModule)
      },
      {
      path:"login",
      loadChildren:()=>
      import("../login/login.module").then(m =>m.LoginPageModule)
      },
      {
      path:"intro",
      loadChildren:()=>
      import("../intro/intro.module").then(m =>m.IntroPageModule)
      },
      {
       path:"register",
       loadChildren:()=>
       import("../register/register.module").then(m=>m.RegisterPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}