import { Stars } from './interface/stars.model';
import { MemoryGameService } from './service/memory-game.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  gameInProcess: boolean = true;
  typeProcess: string | undefined;
  totalMoves: number = 0;
  totalStars: Stars[] = null;

  constructor(
    private memoryGameService:MemoryGameService
  ) { }

  ngOnInit(): void {
    this.memoryGameService.winEventEmmiter.subscribe(type => {
      if(type !== 'lose'){
        this.gameOver(type)
      }
    });

    this.memoryGameService.changeMoves.subscribe(value => {
      this.totalMoves = value;
    });

    this.memoryGameService.amountStars.subscribe(arr => this.totalStars = arr);
  }

  gameOver(type: string):void{
    this.gameInProcess = false;
    this.typeProcess = type;
  }

  // playAgain()
}
