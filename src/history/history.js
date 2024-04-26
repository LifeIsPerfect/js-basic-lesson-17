export async function updateHistoryBlock(newElement, clickHistoryCallback) {
  const history = getHistory();
  const prevPosition = history.findIndex((it) => it === newElement);
  if (prevPosition !== -1) {
    history.splice(prevPosition, 1);
  }

  history.push(newElement);

  const maxHistorySize = 10;
  while (history.length > maxHistorySize) {
    history.shift();
  }

  setHistory(JSON.stringify(history));

  updateHistoryDom(clickHistoryCallback);
}

export async function initHistoryBlock(clickHistoryCallback) {
  const myNode = document.getElementsByClassName('history__list')[0];
  const history = getHistory();
  for (let i = 0; i < history.length; i++) {
    const newChild = document.createElement('li');
    newChild.setAttribute('class', 'history__item');
    newChild.innerHTML = history[i];
    newChild.addEventListener(
      'click',
      clickHistoryCallback.bind(null, history[i]),
    );
    myNode.appendChild(newChild);
    // newChild.outterHTML=`<li class='history__item'>${history[i]}</li>`
  }
}

export function clearHistory() {
  resetHistory();
  resetHistoryDom();
}

function getHistory() {
  if (localStorage.getItem('search-history') === null) {
    localStorage.setItem('search-history', JSON.stringify(new Array()));
  }
  return JSON.parse(localStorage.getItem('search-history'));
}

function setHistory(value) {
  localStorage.setItem('search-history', value);
}

function resetHistory() {
  const searchHistoryArray = new Array();
  localStorage.setItem('search-history', JSON.stringify(searchHistoryArray));
}

function resetHistoryDom() {
  const myNode = document.getElementsByClassName('history__list')[0];
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

async function updateHistoryDom(clickHistoryCallback) {
  resetHistoryDom();
  initHistoryBlock(clickHistoryCallback);
}
