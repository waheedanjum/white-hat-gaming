import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { SlotsComponent } from './components/slots/slots.component';
import { LiveComponent } from './components/live/live.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { RouletteComponent } from './components/roulette/roulette.component';
import { TableComponent } from './components/table/table.component';
import { PokerComponent } from './components/poker/poker.component';
import { OtherComponent } from './components/other/other.component';
import { TopGamesComponent } from './components/top-games/top-games.component';

const routes: Routes = [
  {
    path: 'top-games',
    component: TopGamesComponent
  },
  {
    path: 'new-games',
    component: NewGamesComponent
  },
  {
    path: 'slots',
    component: SlotsComponent
  },
  {
    path: 'jackpot',
    component: JackpotComponent
  },
  {
    path: 'live',
    component: LiveComponent
  },
  {
    path: 'black-jack',
    component: BlackjackComponent
  },
  {
    path: 'roulette',
    component: RouletteComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'poker',
    component: PokerComponent
  },
  {
    path: 'other',
    component: OtherComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
