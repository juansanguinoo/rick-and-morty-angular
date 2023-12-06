import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LocationsService } from './locations.service';
import { HttpParams } from '@angular/common/http';

describe('LocationsService', () => {
  let service: LocationsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationsService],
    });

    service = TestBed.inject(LocationsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch locations', () => {
    const mockParams = new HttpParams().set('page', '1');
    const mockApiResponse = {
      info: {
        count: 108,
        pages: 6,
        next: 'https://rickandmortyapi.com/api/location?page=2',
        prev: null,
      },
      results: [
        {
          id: 1,
          name: 'Earth',
          type: 'Planet',
          dimension: 'Dimension C-137',
          residents: [
            'https://rickandmortyapi.com/api/character/38',
            'https://rickandmortyapi.com/api/character/45',
            // ...
          ],
          url: 'https://rickandmortyapi.com/api/location/1',
          created: '2017-11-10T12:42:04.162Z',
        },
      ],
    };

    service.getLocations(mockParams).subscribe((response) => {
      expect(response).toEqual(mockApiResponse);
    });

    const req = httpTestingController.expectOne(
      `https://rickandmortyapi.com/api/location?page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });

  it('should build HttpParams correctly', () => {
    const params = service.buildParams(1, 'Earth');
    expect(params.toString()).toEqual('page=1&name=Earth');
  });

  it('should retrieve a location by ID', () => {
    const mockLocation = {
      id: 1,
      name: 'Earth',
      type: 'Planet',
      dimension: 'Dimension C-137',
      residents: [
        'https://rickandmortyapi.com/api/character/38',
        'https://rickandmortyapi.com/api/character/45',
        // ...
      ],
      url: 'https://rickandmortyapi.com/api/location/1',
      created: '2017-11-10T12:42:04.162Z',
    };

    service.getLocationById('1').subscribe((location) => {
      expect(location).toEqual(mockLocation);
    });

    const req = httpTestingController.expectOne(
      `https://rickandmortyapi.com/api/location/1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockLocation);
  });
});
