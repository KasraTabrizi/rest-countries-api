import "./App.scss";
import Country from "./components/CountryList/Country/Country";
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
      <div className="coutrylist__container">
        {loadingCountries ? (
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
