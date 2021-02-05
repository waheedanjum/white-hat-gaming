import { Component, OnInit } from '@angular/core';
import {GameFeed} from '../../models/game-feed';
import { FeedService } from '../../services/feed.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})
export class PokerComponent implements OnInit {

  gameFeed: GameFeed[] = [];
  utils: Utils;

  public games$ = this.feedService.getGamesFeed();

  constructor(private feedService: FeedService) {
    this.utils = new Utils();
  }

  ngOnInit(): void {
    this.games$.subscribe((game: GameFeed[] ) =>  {
      game.forEach(g => {
        if (g.categories.find(c => c.toLocaleLowerCase() === 'poker')) {
          this.gameFeed.push(g);
        }
      });
    });
  }

}
