import { Component, signal } from '@angular/core';
import { GameItem } from './game-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  tip: string = ""
  gi: GameItem = new GameItem(1, "")
  guesses: GameItem[] = []
  generatedNumber: number = Math.floor(Math.random() * 10);

  check(){
    let tipNumber = parseInt(this.tip)
    if(this.generatedNumber == tipNumber){ 
      this.guesses.push(new GameItem(tipNumber, "Sikerült!"))
    }
    else if(this.generatedNumber > tipNumber){
      this.guesses.push(new GameItem(tipNumber, "Nagyobbra gondoltam!"))
    }
    else{this.guesses.push(new GameItem(tipNumber, "Kisebbre gondoltam!"))}
  }
}
