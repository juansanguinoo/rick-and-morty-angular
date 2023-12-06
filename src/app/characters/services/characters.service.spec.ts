import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharactersService } from './characters.service';
import { HttpParams } from '@angular/common/http';

describe('CharactersService', () => {
  let service: CharactersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
    });
    service = TestBed.inject(CharactersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve characters', () => {
    const mockParams = new HttpParams().set('page', '1');
    const mockResponse = {
      info: {
        count: 826,
        pages: 42,
        next: 'https://rickandmortyapi.com/api/character/?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
          ],
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z',
        },
      ],
    };

    service.getCharacters(mockParams).subscribe((characters) => {
      expect(characters).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/character?page=1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should build HttpParams correctly', () => {
    const params = service.buildParams(1, 'Rick', 'Alive', 'Male');
    expect(params.toString()).toEqual(
      'page=1&name=Rick&status=Alive&gender=Male'
    );
  });

  it('should retrieve a character by ID', () => {
    const mockResponse = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    };

    service.getCharacterById(1).subscribe((character) => {
      expect(character).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      'https://rickandmortyapi.com/api/character/1'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
