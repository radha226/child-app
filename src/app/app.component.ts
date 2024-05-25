import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = '';
  year: string = '';
  plot: string = '';
  poster: string = '';
  genre: string = '';
  director: string = '';
  actors: string = '';
  imdbRating: string = '';
  awards: string = '';
  runtime:string=''
  type:string=''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.year = params['year'];
      this.plot = params['plot'];
      this.poster = params['poster'];
      this.genre = params['genre'];
      this.director = params['director'];
      this.actors = params['actors'];
      this.imdbRating = params['imdbRating'];
      this.awards = params['awards'];
      this.runtime=params['runtime'];
      this.type=params['type'];
    });
    
  }
}
