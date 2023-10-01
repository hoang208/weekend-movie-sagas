import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', getDescription);
    yield takeEvery('FETCH_DETAILS', getTitle);
    yield takeEvery('FETCH_DETAILS', getGenres);
    yield takeEvery('FETCH_DETAILS', getPoster);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}


//Get movie details based on id
function* getDescription(action) {
    try {
      const details = yield axios.get(`/api/genre/${action.payload}`);
      yield put({ type: 'SET_DESCRIPTION', payload: details.data[0].description});
    } catch (error) {
      console.log("error fetching images", error);
    }
  }

  //Get movie title based on id
  function* getTitle(action) {
    try {
      const details = yield axios.get(`/api/genre/${action.payload}`);
      yield put({ type: 'SET_TITLE', payload: details.data[0].title});
    } catch (error) {
      console.log("error fetching images", error);
    }
  }

  //Get movie genres based on id
  function* getGenres(action) {
    try {
      const details = yield axios.get(`/api/genre/${action.payload}`);
      yield put({ type: 'SET_GENRES', payload: details.data[0].genres});
    } catch (error) {
      console.log("error fetching images", error);
    }
  }

   //Get movie genres based on id
   function* getPoster(action) {
    try {
      const details = yield axios.get(`/api/genre/${action.payload}`);
      yield put({ type: 'SET_POSTER', payload: details.data[0].poster});
    } catch (error) {
      console.log("error fetching images", error);
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie description
const description = (state = [], action) => {
    switch (action.type) {
        case 'SET_DESCRIPTION':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie title
const title = (state = [], action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie poster
const poster = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTER':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        description,
        title,
        genres,
        poster
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
