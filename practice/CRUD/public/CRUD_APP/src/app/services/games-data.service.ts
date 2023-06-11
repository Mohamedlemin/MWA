import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../components/games/games.component'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  

  private base_url = 'http://localhost:3000/api/games/';

  constructor(private _httpClient : HttpClient) { }
   



   getAllGames():Observable<Game[]> {
    return this._httpClient.get<Game[]>(this.base_url);
   }

  
}
