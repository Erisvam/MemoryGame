export class Stars{

  constructor(
    public full: boolean,
    private blackStar:string = "./../../assets/img/black_star.svg",
    private whiteStar:string = "./../../assets/img/white_star.svg"
    ){}

    showStar():string{
      return this.full ? this.blackStar : this.whiteStar;
    }
}
