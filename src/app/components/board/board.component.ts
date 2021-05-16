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


    setTimeout(()=>{
      this.showCard2secounds()
    },100);
  }

  flipCard(id: string, title: string) {
    let card = document.getElementById(id);
    card.classList.toggle('is-flipped');
    this.memoryGameService.verifyMovement(id, title, card, this.attempts);
  }

  showCard2secounds(){
    this.arrIcons.forEach(item => {
      let card = document.getElementById(`${item.id}`);
      card.classList.add("is-flipped")
      setTimeout(()=>{
        card.classList.remove("is-flipped");
      },1000);
    })


  }
}
