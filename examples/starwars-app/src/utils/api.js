export function fetchCharacters() {
  return fetch("https://swapi.co/api/people/").then(res => res.json());
}

export function fetchCharacter(id) {
  return fetch(`https://swapi.co/api/people/${id}`).then(res => res.json());
}

export function parseIDFromURL(url) {
  return url.split("https://swapi.co/api/people/")[1].split("/")[0];
}

export function characterImage(id) {
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
}

export function searchByQuery(q) {
  return fetch(`https://swapi.co/api/people/?search=${q}`).then(res =>
    res.json()
  );
}

export function fetchNextPage(url) {
  return fetch(url).then(res => res.json());
}
