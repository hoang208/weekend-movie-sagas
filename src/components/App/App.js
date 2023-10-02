import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Home Page */}
        <Route path="/">
          <Header />
        </Route>

        <Route path="/" exact>
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
