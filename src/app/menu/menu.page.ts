import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  closeMenu(){
    console.log(' cerrar menu')
    this.menu.close();
  }
  logout(){
    this.navController.navigateRoot("/menu/login")
  }
  
  register(){
    this.navController.navigateForward("/menu/register")
  }
  home(){
    this.navController.navigateBack('/menu/home')
  }
  intro(){
    this.navController.navigateRoot('/menu/intro')
  }
  login(){
    this.navController.navigateRoot('/menu/login')
  }
}