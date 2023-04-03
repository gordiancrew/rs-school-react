export interface IMorti {
  name: string;
  image: string;
  species: string;
  url: string;
  gender: string;
  status: string;
  type: string | undefined;
  created: string;
  location: ILocation;
}
export interface IRes {
  results: IMorti[];
  info: IInfo;
  error: string;
}
export interface ILocation {
  name: string;
  url: string;
}
export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: boolean;
}
