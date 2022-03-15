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
  console.log(countries);
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
    if (!e.target.value) {
      setFetchFilter("none", ""); //if input is empty again, show all countries
    } else {
      setFetchFilter("country", e.target.value); //if something typed in input, filter for country
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
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div></div>
      <div className="coutrylist__container">
        {loading ? (
          <div>loading</div>
        ) : (
          countries &&
          countries.map((country, index) => {
            return <Country country={country} key={index} id={index} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
