import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
 slides = [
  {
    image: "../../assets/imagenes/1.jpg",
    description: "  A veces nuestra vida puede volverse un poco agitada. Entre compromisos, cosas por mantener y organizar, horarios que cumplir…no es de extrañar que muchos nos sintamos abrumados. ",
    title: " Simplifiquemos tu día ",
    subtitle: "Una cosa a la vez", 
    class: " ",
  }, 
  {
    image: "../../assets/imagenes/2.jpg",
    description: "  Las rutinas de la mañana y la tarde nos preparan para el éxito. Nos ayudan a lograr más, pensar con claridad y hacer el trabajo que realmente importa. ",
    title: " Simplifica tus compromisos",
    subtitle: "Animo, Empecemos", 
    class: " ",
  },
  {
    image: "../../assets/imagenes/3.jpg",
    description: "  Simplifica tu correo electrónico. La mayoría de nosotros pasamos más tiempo de lo necesario en nuestra bandeja de entrada, filtrando correos electrónicos de ventas y mercadeo. ",
    title: " Simplifica el consumo de medios",
    subtitle: "salgamos de este ciclo miserable", 
    class: " ",
  },
  {
    image: "../../assets/imagenes/4.jpg",
    description: "  Enamórate de la simplicidad, de lo básico, disfruta de lo que ya está allí en lugar de querer lo que no tienes, disfruta lo que realmente es importante, del ahora, de nuestras pasiones",
    title: " crea nuevos habitos",
    subtitle: "Simplificar es un camino diferente para todos", 
    class: " ",
  }
]
  constructor( private router: Router,
    private storage:  Storage
    ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    console.log('Entre a la Intro');
  }

  goHome(){
  console.log("go home");
  this.storage.set('mostreLaIntro',true);
  this.router.navigateByUrl('/home');
  
   }

}

