import { Component } from '@angular/core';

@Component({
  selector: 'app--heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Iron Man";
  public edad: number = 40;

//* Getters - luce como propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

//* METODOS

  getHeroDescription(): string {
    return this.name + " es un heroe de " + this.edad + " años";
  }


  changeHero ():void{
    this.name = "spiderman";
  }

  changeAge(): void {
    this.edad = 25;
  }

  

}


