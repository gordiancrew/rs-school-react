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
}
export interface ILocation {
  name: string;
  url: string;
}
