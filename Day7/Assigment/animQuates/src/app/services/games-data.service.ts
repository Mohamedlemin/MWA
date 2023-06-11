import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../components/games/games.component';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  private _baseUrl = "http://localhost:3000/api/games"
  constructor(private httpClient: HttpClient) { }

  getAllGames() : Observable<Game[]>{
    return this.httpClient.get<Game[]>(this._baseUrl).pipe(
      
    )
  }
}
