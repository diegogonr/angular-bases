import {Component, NgModule} from '@angular/core';

@Component({
  selector:'app-counter',
  template: `
  
    <p>{{cont}}</p>
    <button (click)="reset()">RESET</button>
    <button (click)="increaseBy(+1)">+</button>
    <button (click)="increaseBy(-1)">-</button>

  
  
  `,               
})

export class CounterComponent {
    constructor() { }

    public cont: number = 0;

    increaseBy(value: number):void {
      this.cont += value; 
      
    }
  
    reset ():void {
      this.cont = 10;
    }
  

}
