import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EpisodesService } from './episodes.service';
import { HttpParams } from '@angular/common/http';

describe('EpisodesService', () => {
  let service: EpisodesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EpisodesService],
    });

    service = TestBed.inject(EpisodesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch episodes', () => {
    const mockParams = new HttpParams().set('page', '1');
    const mockApiResponse = {
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Pilot',
          air_date: 'December 2, 2013',
          episode: 'S01E01',
          characters: [
            'https://rickandmortyapi.com/api/character/1',
            'https://rickandmortyapi.com/api/character/2',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/episode/1',
          created: '2017-11-10T12:56:33.798Z',
        },
      ],
    };

    service.getEpisodes(mockParams).subscribe((response) => {
      expect(response).toEqual(mockApiResponse);
    });

    const req = httpTestingController.expectOne(
      `https://rickandmortyapi.com/api/episode?page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });

  it('should build HttpParams correctly', () => {
    const params = service.buildParams(1, 'Pilot');
    expect(params.toString()).toEqual('page=1&name=Pilot');
  });

  it('should retrieve an episode by ID', () => {
    const mockEpisode = {
      id: 1,
      name: 'Pilot',
      air_date: 'December 2, 2013',
      episode: 'S01E01',
      characters: [
        'https://rickandmortyapi.com/api/character/1',
        'https://rickandmortyapi.com/api/character/2',
        // ...
      ],
      url: 'https://rickandmortyapi.com/api/episode/1',
      created: '2017-11-10T12:56:33.798Z',
    };

    service.getEpisodeById(1).subscribe((episode) => {
      expect(episode).toEqual(mockEpisode);
    });

    const req = httpTestingController.expectOne(
      `https://rickandmortyapi.com/api/episode/1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockEpisode);
  });
});
