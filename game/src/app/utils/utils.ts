import { GameFeed } from '../models/game-feed';

export class Utils {

  public isNewGame(element: GameFeed): boolean {
    return element.categories.includes('new');
  }

  public isTopGame(element: GameFeed): boolean {
    return element.categories.includes('top');
  }
}
