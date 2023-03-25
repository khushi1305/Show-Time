import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetail:any;
  video:any;
  movieCast:any;

  constructor(private apiService: ApiServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    let getId = this.router.snapshot.paramMap.get('id');
    this.getDetails(getId);
    this.getVideo(getId);
    this.getMovieCast(getId);
  }

  getDetails(id:any) {
    this.apiService.getMovieDetails(id).subscribe(res => {
      this.movieDetail = res;
    });
  }

  getVideo(id:any) {
    this.apiService.getVideo(id).subscribe(res => {
      res.results.forEach((element:any) => {
      if(element.type == 'Trailer') {
        this.video = element.key;
      }
      });
    });
  }

  getMovieCast(id:any) {
    this.apiService.getMovieCast(id).subscribe(res => {
      this.movieCast = res.cast;
    })
  }

}
