import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../store/modelTypes';
import { CinemaStore } from '../store/store';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { WatchlistServiceService } from '../watchlist-service.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['../css/button.css', './movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  protected movieData!: Movie;
  protected isInWatchList:boolean = false;

  constructor(private activatedroute:ActivatedRoute, 
    private sanitizer : DomSanitizer,
    private watchListService: WatchlistServiceService){}

  ngOnInit(): void {
    const movieId= this.activatedroute.snapshot.paramMap.get("id");
    if(movieId){
      const movie= CinemaStore.getInstance().getMovieById(parseInt(movieId));
      if(movie){
        this.movieData = movie;
        this.isInWatchList= this.watchListService.isMovieInWatchList(this.movieData.title);
      }
    }
   
  }

  public getSanitizedYoutubeURL(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  protected addToWatchList(movieName: string):void{

    this.watchListService.addToWatchList(movieName);
    this.isInWatchList = !this.isInWatchList;
  }

}
