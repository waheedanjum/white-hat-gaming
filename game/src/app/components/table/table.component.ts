import { Component, OnInit } from '@angular/core';
import { GameFeed } from '../../models/game-feed';
import { FeedService } from '../../services/feed.service';
import { Utils} from '../../utils/utils';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  utils: Utils;
  gameFeed: GameFeed[] = [];

  public games$ = this.feedService.getGamesFeed();

  constructor(private feedService: FeedService) {
    this.utils = new Utils();
  }

  ngOnInit(): void {
    this.games$.subscribe((game: GameFeed[] ) =>  {
      game.forEach(g => {
        if (g.categories.find(c => c.toLocaleLowerCase() === 'table')) {
          this.gameFeed.push(g);
        }
      });
    });
  }

}
