import { Component, OnInit} from '@angular/core';
import { FeedService } from '../../services/feed.service';
import {GameFeed} from '../../models/game-feed';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss']
})
export class NewGamesComponent implements OnInit {

  gameFeed: GameFeed[] = [];

  public games$ = this.feedService.getGamesFeed();
  public jackpot$ = this.feedService.getJackpotFeed();

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.games$.subscribe((game: GameFeed[] ) =>  {
      game.forEach(g => {
        if (g.categories.find(c => c.toLocaleLowerCase() === 'new')) {
          this.gameFeed.push(g);
        }
      });
    });
  }

}
