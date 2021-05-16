import { MemoryGameService } from './../../service/memory-game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {


  constructor(
    private memoryGameService:MemoryGameService
  ) { }

  ngOnInit(): void {

  }

}
