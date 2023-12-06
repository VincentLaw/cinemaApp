import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FooterModule } from './footer/footer.module';
import { WatchlistServiceService } from './watchlist-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    LandingPageComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule
  ],
  providers: [WatchlistServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
