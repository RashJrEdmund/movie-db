import '../styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function creatSearchBar() {
  const searchBar = document.createElement('form');
  searchBar.classList.add('');
  searchBar.innerHTML = "<input type='search' name='searchTerm'><button>search<button>";
  return searchBar;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class="title">The Movie DB Trial</h1>';
  header.appendChild(creatSearchBar());
  return header;
}

function createMovie() {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = '<h2>Sample movie title here</h2>';
  return movieElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function renderpage() {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader());
  mainContainer = createMain;
  appContainer.appendChild(createMain());
}

function renderMovies(movies = [1, 2, 3, 4, 5]) {
  mainContainer.innerHTML = '';
  movies.forEach((movie) => {
    mainContainer.appendChild(createMovie(movie));
  });
}

export default {
  renderpage,
  renderMovies,
};
