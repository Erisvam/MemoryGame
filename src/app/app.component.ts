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

  constructor(
    private memoryGameService:MemoryGameService
  ) { }

  ngOnInit(): void {
    this.memoryGameService.winEventEmmiter.subscribe(type => { type !== "lose" ? this.gameOver(type): null; });
  }

  gameOver(type: string):void{
    this.gameInProcess = false;
    this.typeProcess = type;
  }

  // playAgain()
}
