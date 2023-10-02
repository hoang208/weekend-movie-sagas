import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import Header from "../Header/Header";
import Home from "../Home/Home";
import MovieForm from "../MovieForm/MovieForm";
import Success from "../MovieForm/Success";

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

         {/* Form page */}
         <Route path="/form" exact>
          <MovieForm />
        </Route>

        <Route path="/form/success" exact>
          <Success />
        </Route>

      </Router>
    </div>
  );
}

export default App;
