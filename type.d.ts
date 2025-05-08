export interface ICountryData {
  name: {
    common: string;
  };
  region: string;
  population: number;
}

export type CountriesProps = {
  loaderData: ICountryData[];
  search: string;
  setSearch: (search: string) => void;
  region: string;
  setRegion: (region: string) => void;
};
