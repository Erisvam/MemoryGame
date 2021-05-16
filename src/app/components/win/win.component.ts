import { Stars } from './../../interface/stars.model';
import { MemoryGameService } from './../../service/memory-game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {


  @Input() totalMoves: number = 0;
  @Input() totalStars: Stars[] = null;

  constructor() { }

  ngOnInit(): void {
  }

  playAgain(){
    window.location.reload();
  }

}
