import { v4 as uuid } from "uuid";
import { Link } from "react-router";
import type { ICountryData, CountriesProps } from "type";

const CountriseList = ({ loaderData, search, setSearch, region, setRegion }: CountriesProps) => {
    const filteredCountries = loaderData.filter((country: ICountryData) => {
        const matchesSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase());
        const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase();
        return matchesSearch && matchesRegion;
      });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900"> Countries</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
        />
        <select 
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"
          >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
            filteredCountries.length === 0 ? (
            <p>No countries found</p>
          ) : (
            filteredCountries.map((country: ICountryData) => (
              <li 
                key={uuid()}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
                >
                <Link 
                  to={`/countries/${country.name.common}`}
                  className="text-indigo-600 hover:underline text-lg font-semibold"
                  >
                     {country.name.common} 
                  </Link>
                <div className="text-gray-600 text-sm mt-1">
                  Region: {country.region} <br />
                  Population: {country.population}
                </div>
              </li>
            ))
          )}
      </ul>
    </div>
  );
};

export default CountriseList;
