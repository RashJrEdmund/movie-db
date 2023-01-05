import ui from './scripts/ui';
import data from './scripts/data';
import api from './scripts/api';

function updateMovies(movies) {
  data.setMovies(movies);
  ui.renderMovies(data.getMovies());
}

ui.renderpage({
  onSearch: (searchTerm) => {
    api.searchMovies(searchTerm).then(updateMovies);
  },
});

api.getPopularMovies().then(updateMovies);

/* api.getPopularMovies().then((movies) => {
  data.setMovies(movies.results);
  ui.renderMovies(data.getMovies());
}); */

/* setTimeout(() => {
  data.setMovies([1, 2, 3, 4, 4]);
  ui.renderMovies(data.getMovies());
}, 2000); */
