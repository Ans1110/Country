import { Link } from "react-router";
import type { Route } from "../+types/root";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

interface ICountryData {
  name: {
    common: string;
  };
  region: string;
  population: number;
}


export default function Countries({ loaderData = [] }: { loaderData?: ICountryData[] }) {
  const [search, setSearch] = useState<string>("");
  const filteredCountries = loaderData.filter((country: ICountryData) => {
    const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  })

  return (
    <div>
      <h2> Countries</h2>

      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {
          filteredCountries.map((country: ICountryData) => (
            <li key={uuid()}>
              <Link to={`/countries/${country.name.common}`}> {country.name.common} </Link>
              <div>
                Region: {country.region} | Population: {country.population}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}