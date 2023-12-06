import { Movie } from "./modelTypes";

export class CinemaStore {
    // class used as static store, for a complex project we can use NgRx
    public static instance: CinemaStore; 

    public static getInstance():CinemaStore{
        if(!this.instance){
            this.instance= new CinemaStore();
        }
        return this.instance;
    }

    private constructor(){}

    public getMovies(): Movie[]{
        return  [
            {
                id:1,
                title: 'Tenet',
                description: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a
                Protagonist journeys through a twilight world of international espionage on a mission that will unfold in
                something beyond real time`,
                rating: '7.8',
                duration: '2h 30 min',
                genre: 'Action, Sci-Fi',
                releasedDate: '3 September 2020',
                image: '/assets/images/Tenet.png',
                trailerLink: 'https://www.youtube.com/embed/LdOM0x0XDMo?si=1pT9hwqCrXlw9XqN'},
            
            {
                id:2,
                title: `Spider-Man: Into the Spider-Verse`,
                description: `Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-
                powered individuals from other dimensions to stop a threat for all realities.`,
                rating: '8.4',
                duration: '1h 57min',
                genre: 'Action, Animation, Adventure',
                releasedDate: '14 December 2018',
                image: '/assets/images/SpiderMan.png',
                trailerLink: 'https://www.youtube.com/embed/tg52up16eq0?si=AK_Lu5N5IrrpTQC6'},
            
            {
                id:3,
                title: `Knives Out`,
                description: `A detective investigates the death of a patriarch of an eccentric, combative family. rating: 7.9`,
                duration: '2h 10min',
                genre: 'Comedy, Crime, Drama',
                releasedDate: '27 November 2019',
                image: '/assets/images/KnivesOut.png',
                trailerLink: 'https://www.youtube.com/embed/qGqiHJTsRkQ?si=At0osWf4ZrmQB9e7'
            },
            
            {
                id:4,
                title: `Guardians of the Galaxy`,
                description: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to
                purge the universe.`,
                rating: '8.0',
                duration: '2h 1min',
                genre: 'Action, Adventure, Comedy',
                releasedDate: '1 August 2014',
                image: '/assets/images/GuardiansofTheGalaxy.png',
                trailerLink: 'https://www.youtube.com/embed/d96cjJhvlMA?si=oKhRu9SGWyP9AHNg'
            },
            
            {
                id:5,
                title: `Avengers: Age of Ultron`,
                description: `When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program
                called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron
                from enacting his terrible plan.`,
                rating: '7.3',
                duration: '2h 21min',
                genre: 'Action, Adventure, Sci-Fi',
                releasedDate: '1 May 2015',
                image: '/assets/images/Avengers.png',
                trailerLink: 'https://www.youtube.com/embed/tmeOjFno6Do?si=UCEQ4wDOw03rkXyb'
            }
        
          ];

    }
    

    public getMovieById(id:number){
        return this.getMovies().find((movie:Movie)=> movie.id===id);
    }

}