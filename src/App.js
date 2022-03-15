//IMPORT REACT
import { useState } from "react";

//IMPORT STYLES
import "./App.scss";

//IMPORT CHILD COMPONENTS
import Country from "./components/CountryList/Country/Country";
import Header from "./components/Header/Header";

//IMPORT CUSTOM HOOKS
import { useFetchCountries } from "./hooks/useFetchAll";

function App() {
  const [countries, error, loading, setFetchFilter] = useFetchCountries();
  const [searchInput, setSearchInput] = useState("");

  const onSearchCountryHandler = (e) => {
    setSearchInput(e.target.value);
    if (!e.target.value) {
      setFetchFilter("none", ""); //if input is empty again, show all countries
    } else {
      setFetchFilter("country", e.target.value); //if something typed in input, filter for country
    }
  };

  const onFilterRegionHandler = (e) => {
    if (e.target.value === "default") {
      setFetchFilter("none", ""); //if input is empty again, show all countries
    } else {
      setFetchFilter("region", e.target.value); //if something typed in input, filter for region
    }
  };

  return (
    <div className="App">
      <Header />
      {/* SEARCH INPUT */}
      <div>
        <ion-icon name="search"></ion-icon>
        <input
          type="text"
          value={searchInput}
          placeholder="Search for a country..."
          onChange={(e) => onSearchCountryHandler(e)}
        />
      </div>
      <div>
        <select
          name="region"
          id="region"
          onChange={(e) => onFilterRegionHandler(e)}
        >
          <option value="default">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="coutrylist__container">
        {loading ? (
          <div>loading...</div>
        ) : countries ? (
          countries.map((country, index) => {
            return <Country country={country} key={index} id={index} />;
          })
        ) : (
          error && <div>error</div>
        )}
      </div>
    </div>
  );
}

export default App;
