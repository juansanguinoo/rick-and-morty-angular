import { Component, OnInit, inject } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import {
  ApiResponseEpisode,
  Episode,
} from '../../interfaces/episodes.interface';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.css'],
})
export class EpisodesPageComponent implements OnInit {
  private episodesService = inject(EpisodesService);
  public episodes: Episode[] = [];
  public currentPage: number = 1;
  public nameFilter: string = '';

  ngOnInit(): void {
    this.fetchEpisodes();
  }

  fetchEpisodes() {
    const params = this.episodesService.buildParams(
      this.currentPage,
      this.nameFilter
    );
    this.episodesService.getEpisodes(params).subscribe({
      next: (data: ApiResponseEpisode) => {
        this.episodes = data.results;
        console.log(this.episodes);
      },
      error: (error) => console.error(error),
    });
  }

  updateFilters(name?: string) {
    if (name !== undefined) this.nameFilter = name;
    this.fetchEpisodes();
  }

  onNextPage() {
    this.currentPage++;
    this.fetchEpisodes();
  }

  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchEpisodes();
    }
  }
}
