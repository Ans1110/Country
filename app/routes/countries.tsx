import type { ICountryData } from "type";
import CountriseList from "~/components/CountriseList";

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData = [] }: { loaderData?: ICountryData[] }) {

  return (
    <CountriseList
      loaderData={loaderData}
    />
  );
}