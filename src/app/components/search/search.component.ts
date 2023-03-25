import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    'searchInput': new FormControl('')
  });
  searchResponse:any = [];
  trendingMovies:any = [];
  searchResults = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.trendingMoviesData().subscribe(res => {
      res.results.map((e:any) => {
        this.trendingMovies.push(e.original_title);
      });
    })
  }

  searchMovie() {
    this.searchResults = true;
    this.apiService.searchMovies(this.searchForm.value).subscribe(res => {
      this.searchResponse = res.results;
      this.searchResponse.length == 0 ? this.searchResults = false : '';
    });
  }

}
