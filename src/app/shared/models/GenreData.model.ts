import { SongData } from './SongData.model';

export interface GenreData {
  "id": number,
  "genre": string,
  "data": SongData[]
}
