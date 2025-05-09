export interface ICountryData {
  name: {
    common: string;
  };
  region: string;
  population: number;
}

export type CountriesProps = {
  loaderData: ICountryData[];
};

export interface ICountry {
  name: string | "N/A";
  official: string | "N/A";
  region: string | "N/A";
  subregion: string | "N/A";
  capital: string | "N/A";
  population: number | "N/A";
  flagUrl: string | "";
}

export interface ICountryApiResponse {
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  flags: {
    png: string;
  };
}
