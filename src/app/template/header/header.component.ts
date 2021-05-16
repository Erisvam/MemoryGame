import { Stars } from './../../interface/stars.model';
import { MemoryGameService } from './../../service/memory-game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  arrStars: Stars[] = null;
  moves: number = 0;

  constructor(private memoryGameService: MemoryGameService) {}

  ngOnInit(): void {
    this.memoryGameService.changeMoves.subscribe(move => this.moves = move);
    this.arrStars = this.memoryGameService.arrStars;
  }
}
