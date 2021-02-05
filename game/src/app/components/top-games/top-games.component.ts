import { Component, OnInit } from '@angular/core';
import {FeedService} from '../../services/feed.service';
import {GameFeed} from '../../models/game-feed';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {

  gameFeed: GameFeed[] = [];
  public games$ = this.feedService.getGamesFeed();

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.games$.subscribe((game: GameFeed[] ) =>  {
      game.forEach(g => {
        if (g.categories.find(c => c.toLocaleLowerCase() === 'top')) {
          this.gameFeed.push(g);
        }
      });
    });

    console.log('games: ', this.gameFeed);
  }

}
