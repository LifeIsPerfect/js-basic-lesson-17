import './style.css';
import './history/history.css';
import './map/map.css';
import './search-button/search-button.css';
import './search-input/search-input.css';
import './weather/weather.css';
import { updateWeatherDom } from './weather/weather';
import { findLocation, updateMapDom } from './map/map';
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
  const location = await findLocation(searchString);

  updateWeatherDom(location.coords);
  updateMapDom(location.coords);
  updateHistoryBlock(location.name, mainLoop);
}

async function buttonHandler() {
  const searchString = getSearchString();
  mainLoop(searchString);
  resetSearchString();
}

initHistoryBlock(mainLoop);

document
  .getElementsByClassName('history__clear-button')[0]
  .addEventListener('click', clearHistory);

document
  .getElementsByClassName('search-button')[0]
  .addEventListener('click', buttonHandler);
