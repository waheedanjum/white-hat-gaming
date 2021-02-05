import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameFeed } from '../models/game-feed';
import {JackpotFeed} from "../models/jackpot-feed";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private gamesFeedURL = 'http://stage.whgstage.com/front-end-test/games.php';
  private jackPotFeedURL = 'http://stage.whgstage.com/front-end-test/jackpots.php';

  constructor(private http: HttpClient) { }

  getGamesFeed(): Observable<GameFeed[]> {
    return this.http.get<GameFeed[]>(this.gamesFeedURL);
  }

  getJackpotFeed(): Observable<JackpotFeed[]> {
    return this.http.get<JackpotFeed[]>(this.jackPotFeedURL);
  }
}
