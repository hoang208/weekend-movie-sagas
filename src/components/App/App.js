import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import Header from "../Header/Header";
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Home Page */}
        <Route path="/">
          <Header />
        </Route>


        <Route path="/" exact>
          <Home />
        </Route>

        {/* Movie List Page */}
        <Route path="/movies" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details/:id">
          <Details />
        </Route>
      </Router>
    </div>
  );
}

export default App;
