import './style.css';
import './history/history.css';
import './map/map.css';
import './search-button/search-button.css';
import './search-input/search-input.css';
import './weather/weather.css';
import { updateWeatherDom } from './weather/weather';
import { geoCode, updateMapDom } from './map/map';
import {
  updateHistoryBlock,
  initHistoryBlock,
  clearHistory,
} from './history/history';
import {
  getSearchString,
  resetSearchString,
} from './search-input/search-input';

async function mainLoop(searchString) {
  const coords = await geoCode(searchString);

  updateWeatherDom(coords);
  updateMapDom(coords);
  updateHistoryBlock(searchString, mainLoop);
}

async function buttonHandler() {
  // Получить название города из текстбокса
  // Добавить город в localstorage (если есть переполнение, убрать старый)
  // f()
  // Удалить текст в текстбоксе
  // let a = document.getElementsByClassName("search-input")[0];
  const searchString = getSearchString();
  mainLoop(searchString);
  resetSearchString();
}

// updateHistoryDom();
initHistoryBlock(mainLoop);

document
  .getElementsByClassName('history__clear-button')[0]
  .addEventListener('click', clearHistory);

document
  .getElementsByClassName('search-button')[0]
  .addEventListener('click', buttonHandler);
