import { Options } from './../interface/options';
import { EventEmitter, Injectable } from '@angular/core';
import { Stars } from '../interface/stars.model';


@Injectable({
  providedIn: 'root',
})
export class MemoryGameService {

  moves: number = 0;
  position: number = 0;
  arrStars: Stars[] = [new Stars(true), new Stars(true), new Stars(true)];
  options: Options = {
    verify: [],
    correct: [],
    firstSelection: '',
    secoundSelection: '',
    firstPropertySelection: '',
    secoundPropertySelection: '',
    firstTitleSelection: '',
    secoundTitleSelection: '',
  };

  changeMoves: EventEmitter<number> = new EventEmitter<number>();
  winEventEmmiter: EventEmitter<string> = new EventEmitter<string>();
  amountStars: EventEmitter<Array<Stars>> = new EventEmitter<Array<Stars>>();
  playAgainVariable: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {}

  loseStar(position: number, stars: Stars[]): void {
    if (position < stars.length) {
      stars[position].full = false;
      this.position++;
      this.amountStars.emit(stars);
    }
  }

  verifyMovement(id:string, title:string, cardSelected: any, attempts: Stars[]){
    this.options.verify.push(id);

    if (this.options.verify[0] !== undefined && this.options.verify[1] === undefined) {
      this.options.firstSelection = this.options.verify[0];
      this.options.firstPropertySelection = cardSelected;
      this.options.firstTitleSelection = title;
    }

    if (this.options.verify[1] !== undefined) {
      this.options.secoundSelection = this.options.verify[1];
      this.options.secoundPropertySelection = cardSelected;
      this.options.secoundTitleSelection = title;
    }

    if (this.options.firstTitleSelection === this.options.secoundTitleSelection) {
      this.moves++;
      this.changeMoves.emit(this.moves);
      this.options.correct.push(
        this.options.firstSelection,
        this.options.secoundSelection
      );
      this.options.firstPropertySelection = '';
      this.options.secoundPropertySelection = '';
      this.options.verify = [];

      if (this.options.correct.length === this.getSort().length) {
        setInterval(()=>{ this.winEventEmmiter.emit('win'); },400)
      }
    }else {
      if (this.options.firstPropertySelection !== '' && this.options.secoundPropertySelection !== '') {
        let firstPropertie = this.options.firstPropertySelection;
        let secoundPropertie = this.options.secoundPropertySelection;

        setTimeout(() => {
          this.moves++;
          this.changeMoves.emit(this.moves);
          firstPropertie.classList.remove('is-flipped');
          secoundPropertie.classList.remove('is-flipped');
          this.options.firstPropertySelection = '';
          this.options.secoundPropertySelection = '';
          this.options.firstTitleSelection = '';
          this.options.secoundTitleSelection = '';
          this.options.verify = [];
          this.loseStar(this.position, attempts);
          this.winEventEmmiter.emit('lose');
        }, 500);
      }
    }
  }


  getSort() {
    let icons = [
      {
        id: 1,
        title: 'Twitter',
        url: './../../assets/img/018-twitter.svg',
      },
      {
        id: 2,
        title: 'Twitter',
        url: './../../assets/img/018-twitter.svg',
      },
      {
        id: 3,
        title: 'Git',
        url: './../../assets/img/029-github.svg',
      },
      {
        id: 4,
        title: 'Git',
        url: './../../assets/img/029-github.svg',
      },
      {
        id: 5,
        title: 'Spotify',
        url: './../../assets/img/033-spotify.svg',
      },
      {
        id: 6,
        title: 'Spotify',
        url: './../../assets/img/033-spotify.svg',
      },
      {
        id: 7,
        title: 'Pinterest',
        url: './../../assets/img/008-pinterest.svg',
      },
      {
        id: 8,
        title: 'Pinterest',
        url: './../../assets/img/008-pinterest.svg',
      },
      {
        id: 9,
        title: 'SnapShot',
        url: './../../assets/img/024-snapchat.svg',
      },
      {
        id: 10,
        title: 'SnapShot',
        url: './../../assets/img/024-snapchat.svg',
      },
      {
        id: 11,
        title: 'Youtube',
        url: './../../assets/img/006-youtube.svg',
      },
      {
        id: 12,
        title: 'Youtube',
        url: './../../assets/img/006-youtube.svg',
      },
      {
        id: 13,
        title: 'Driver',
        url: './../../assets/img/001-google-drive.svg',
      },
      {
        id: 14,
        title: 'Driver',
        url: './../../assets/img/001-google-drive.svg',
      },
      {
        id: 15,
        title: 'WhatsApp',
        url: './../../assets/img/014-whatsapp.svg',
      },
      {
        id: 16,
        title: 'WhatsApp',
        url: './../../assets/img/014-whatsapp.svg',
      },
    ];

    return this.shuffle(icons);
  }

  private shuffle(arr: any[]) {
    for (let indice = arr.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);

      [arr[indice - 1], arr[indiceAleatorio]] = [
        arr[indiceAleatorio],
        arr[indice - 1],
      ];
    }
    return arr;
  }
}
