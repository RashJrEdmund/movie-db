import ui from './scripts/ui';
import data from './scripts/data';
import api from './scripts/api';

ui.renderpage();
ui.renderMovies(data.getMovies());
api.getPopularMovies().then((movies) => {
  data.setMovies(movies.results);
  ui.renderMovies(data.getMovies());
});

setTimeout(() => {
  data.setMovies([1, 2, 3, 4, 4]);
  ui.renderMovies(data.getMovies());
}, 2000);
