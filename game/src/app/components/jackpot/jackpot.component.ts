import { Component, OnInit } from '@angular/core';
import { GameFeed } from '../../models/game-feed';
import { FeedService } from '../../services/feed.service';
import { JackpotFeed } from '../../models/jackpot-feed';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.scss']
})
export class JackpotComponent implements OnInit {
  utils: Utils;

  jackPotGames: any[] =  [];
  gameFeed: GameFeed[] = [];
  jackPotfeed: JackpotFeed[] = [];

  public games$ = this.feedService.getGamesFeed();
  public jackpot$ = this.feedService.getJackpotFeed();

  constructor(private feedService: FeedService) {
    this.utils = new Utils();
  }

  ngOnInit(): void {
    this.games$.subscribe((gameFeed: GameFeed[] ) =>  {
      this.gameFeed = gameFeed;
    });

    this.jackpot$.subscribe((jackPotFeed: JackpotFeed[]) => {
       this.jackPotfeed = jackPotFeed;
       this.jackPotGames = this.filterJackpotGames();
       console.log(this.jackPotGames);
     });

  }

  filterJackpotGames(): GameFeed[] {
     return this.gameFeed.filter(g => this.jackPotfeed.find(({game}) => game.trim().toLowerCase() === g.id.trim().toLowerCase()));
   }

}
