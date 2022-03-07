import "./App.scss";
import Header from "./components/Header/Header";
import {
  useFetchAll,
  useFetchCountry,
  useFetchRegion,
} from "./hooks/useFetchAll";

function App() {
  const [countries, errorCountries, loadingCountries] = useFetchAll();
  // const [country, errorCountry, loadingCountry] = useFetchCountry("Belgium");
  // const [region, errorRegion, loadingRegion] = useFetchRegion("Europe");

  return (
    <div className="App">
      <Header />
      {/* SEARCH INPUT */}
      <div>
        <ion-icon name="search"></ion-icon>
        <input type="text" />
      </div>
      <div>{/* FILTER */}</div>
      {loadingCountries ? (
        <div>loading</div>
      ) : (
        countries &&
        countries.map((country) => {
          return (
            <div>
              <img
                src={country.flags.svg}
                alt="flag"
                style={{ width: "50%" }}
              />
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
