import { Stars } from './../../interface/stars.model';
import { MemoryGameService } from './../../service/memory-game.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  arrIcons: Array<any>;

  attempts: Stars[] = null;


  constructor(private memoryGameService: MemoryGameService) {}

  ngOnInit(): void {
    this.arrIcons = this.memoryGameService.getSort();
    this.attempts = this.memoryGameService.arrStars;
  }

  flipCard(id: string, title: string) {
    let card = document.getElementById(id);
    card.classList.toggle('is-flipped');
    this.memoryGameService.verifyMovement(id, title, card, this.attempts);
  }
}
