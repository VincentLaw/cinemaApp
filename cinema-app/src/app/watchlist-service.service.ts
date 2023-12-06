import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistServiceService {

  constructor() { }


  public addToWatchList(movieName:string){
    let watchListMoviesStr=localStorage.getItem('watchList');

    let movieNames=[];
    movieNames.push(movieName);
    if(watchListMoviesStr){
      let storedMovieNames=watchListMoviesStr.split(',');
      const filterResult = storedMovieNames.filter(currentName => currentName!==movieName);
      if(filterResult.length !== storedMovieNames.length){
        movieNames= filterResult;
      }else{
        movieNames=movieNames.concat(storedMovieNames);
      }
    }
    localStorage.setItem('watchList',  movieNames.toString());
  }

  public isMovieInWatchList(movieName:string):boolean{
    let watchListMoviesStr=localStorage.getItem('watchList');
    if(watchListMoviesStr){
      let storedMovieNames=watchListMoviesStr.split(',');
      return !!storedMovieNames.find((currentName:string)=> currentName===movieName);
    }
    return false;
  } 
}
