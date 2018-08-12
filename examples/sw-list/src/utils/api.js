export function fetchPeople() {
  return fetch("https://swapi.co/api/people/").then(res => res.json());
}

export function fetchCharacter(id) {
  return fetch(`https://swapi.co/api/people/${id}`).then(res => res.json());
}

export function parseIDFromURL(url) {
  return url.split("https://swapi.co/api/people/")[1].split("/")[0];
}
