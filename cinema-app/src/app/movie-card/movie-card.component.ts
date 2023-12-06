import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../store/modelTypes';
import { WatchlistServiceService } from '../watchlist-service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css', '../css/button.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movieData!: Movie;
  @Input() movieNamesInWatchList: string[] = [];
  protected isInWatchList: boolean = false;
  
  constructor(private watchListService: WatchlistServiceService){

  }

  ngOnInit(): void {
    this.isInWatchList = !!this.movieNamesInWatchList.find((currentName:string) => {
      return currentName === this.movieData.title});
  }

  protected addToWatchList(movieName: string):void{
    this.watchListService.addToWatchList(movieName);
    this.isInWatchList = !this.isInWatchList;
  }
}
