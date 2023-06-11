import { Component, OnInit } from '@angular/core';
import { GamesDataService } from 'src/app/services/games-data.service';


export class Game {
  title!:String ;
  year!:number ;
  rate!:number ;
  price!:number ;
  constructor(title:String,year:number,rate:number,price:number) {
    this.title =title;
    this.year =year;
    this.rate =rate;
    this.price =price;
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})


export class GamesComponent implements OnInit{


  constructor(private gameService: GamesDataService){}

  games!: Game[];

  ngOnInit(): void {
    this.getAllGames()
  }

  getAllGames(){
    console.log('get all called');
    
    this.gameService.getAllGames().subscribe({

      next:(games:Game[])=>{this.games=games
      console.log(games);
      },
      error:(err)=> {console.log(err)}
    
    }
    )
  }





}
