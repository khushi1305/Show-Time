import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerResponse:any = [];
  trendingResponse:any = [];
  actionMovies:any = [];
  adventureMovies:any = [];
  animationMovies:any = [];
  comedyMovies:any = [];
  documentaryMovies:any = [];
  scienceficMovies:any = [];
  thrillerMovies:any = [];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.bannerData();
    this.trendingData();
    this.genreMoviesData();
  }

  bannerData() {
    this.apiService.bannerApiData().subscribe(res => {
      this.bannerResponse = res.results;
    });
  }

  trendingData() {
    this.apiService.trendingMoviesData().subscribe(res => {
      this.trendingResponse = res.results;
    });
  }

  genreMoviesData() {
    this.apiService.actionMoviesData().subscribe(res => {
      this.actionMovies = res.results;
    });

    this.apiService.adventureMoviesData().subscribe(res => {
      this.adventureMovies = res.results;
    });

    this.apiService.animationMoviesData().subscribe(res => {
      this.animationMovies = res.results;
    });

    this.apiService.comedyMoviesData().subscribe(res => {
      this.comedyMovies = res.results;
    });

    this.apiService.documentaryMoviesData().subscribe(res => {
      this.documentaryMovies = res.results;
    });

    this.apiService.sciencefictionMoviesData().subscribe(res => {
      this.scienceficMovies = res.results;
    });

    this.apiService.thrillerMoviesData().subscribe(res => {
      this.thrillerMovies = res.results;
    });

  }

}
