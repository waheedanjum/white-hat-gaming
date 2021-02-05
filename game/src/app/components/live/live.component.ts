import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { GameFeed } from '../../models/game-feed';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  utils: Utils;
  gameFeed: GameFeed[] = [];
  public games$ = this.feedService.getGamesFeed();

  constructor(private feedService: FeedService) {
    this.utils = new Utils();
  }

  ngOnInit(): void {
    this.games$.subscribe((game: GameFeed[] ) =>  {
      game.forEach(g => {
        if (g.categories.find(c => c.toLocaleLowerCase() === 'live')) {
          this.gameFeed.push(g);
        }
      });

      console.log('Live: ', this.gameFeed);
    });

  }

}
