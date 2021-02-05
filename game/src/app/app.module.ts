// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    NewGamesComponent,
    JackpotComponent,
    SlotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent,
    TopGamesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
