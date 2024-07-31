export function getSearchString() {
  return document.getElementsByClassName('search-input')[0].value;
}

export function resetSearchString() {
  document.getElementsByClassName('search-input')[0].value = '';
}
