export interface ApiResponseEpisode {
  info: Info;
  results: Episode[];
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
