import { Component, OnInit } from '@angular/core';
import { CinemaStore } from '../store/store';
import { Movie } from '../store/modelTypes';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  protected movieNamesInWatchList: string[] = []; 
  protected directionSort = false;

  protected movies: Movie[] = [];

  ngOnInit(): void {
    this.movies = CinemaStore.getInstance().getMovies();
    const movieNames = localStorage.getItem('watchList');
    this.movieNamesInWatchList= movieNames ? movieNames.split(',') : []; 
  }

  protected sort(sortType: string, direction:boolean): void{
    this.directionSort = direction;
    if(sortType === 'title'){
      this.movies=this.movies.sort((movieOne, movieTwo) => direction ? (movieOne.title < movieTwo.title ? -1 : 1) :  (movieOne.title > movieTwo.title ? -1 : 1));
    }else{
      this.movies=this.movies.sort((movieOne, movieTwo) => {
        const movieOneDate = new Date(movieOne.releasedDate);
        const movieTwoDate = new Date(movieTwo.releasedDate);
        const a= direction ? (movieOneDate < movieTwoDate ? -1 : 1) :  (movieOneDate > movieTwoDate ? -1 : 1);
        debugger
        return a;
      });
    }

  }


}
