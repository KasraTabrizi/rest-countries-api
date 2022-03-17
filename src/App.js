//IMPORT REACT
import { useState } from "react";

//IMPORT STYLES
import "./App.scss";

//IMPORT CHILD COMPONENTS
import Country from "./components/CountryList/Country/Country";
import FilterSelect from "./components/FilterSelect/FilterSelect";
import Header from "./components/Header/Header";
import InputSearch from "./components/InputSearch/InputSearch";

//IMPORT CUSTOM HOOKS
import { useFetchCountries } from "./hooks/useFetchAll";

function App() {
  const [countries, error, loading, setFetchFilter] = useFetchCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [expandCountryInfo, setExpandCountryInfo] = useState(false);

  console.log(countries);
  const onSearchCountryHandler = (value) => {
    console.log(value);
    if (!value) {
      setFetchFilter(); //if input is empty again, show all countries
    } else {
      setFetchFilter("country", value); //if something typed in input, filter for country
    }
  };

  const onFilterRegionHandler = (e) => {
    if (e.target.value === "default") {
      setFetchFilter(); //if input is empty again, show all countries
    } else {
      setFetchFilter("region", e.target.value); //if something typed in input, filter for region
    }
  };

  const selectedCountryHandler = (countryName) => {
    setSelectedCountry(countryName);
    setExpandCountryInfo(true);
  };

  return (
    <div className="App">
      <Header />
      {/* if a specific country is not selected, show the filter options */}
      {selectedCountry ? (
        <div
          onClick={() => {
            setExpandCountryInfo(false);
            setSelectedCountry(null);
          }}
        >
          back
        </div>
      ) : (
        <div className="filter__container">
          <InputSearch
            onChangeHandler={(value) => onSearchCountryHandler(value)}
          />
          <FilterSelect onChangeHandler={(e) => onFilterRegionHandler(e)} />
        </div>
      )}
      <div className="coutrylist__container">
        {loading ? (
          <div>loading...</div>
        ) : countries ? (
          countries.map((country, index) => {
            if (selectedCountry) {
              if (selectedCountry === country.name.common)
                return (
                  <Country
                    country={country}
                    key={index}
                    id={index}
                    expandCountryInfo={expandCountryInfo}
                    onClickHandler={(countryName) =>
                      selectedCountryHandler(countryName)
                    }
                  />
                );
            } else {
              return (
                <Country
                  country={country}
                  key={index}
                  id={index}
                  onClickHandler={(countryName) =>
                    selectedCountryHandler(countryName)
                  }
                />
              );
            }
          })
        ) : (
          error && <div>error</div>
        )}
      </div>
    </div>
  );
}

export default App;
