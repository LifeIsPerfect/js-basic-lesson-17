// Получить координаты по поисковому запросу (город, место, адрес и тд).
// Используется geoCoder от yandex.
// Используется первый результат в поиске, поэтому поведение при запросе "ул. Ленина" (которая есть в разных городах) не определено.
// Результат - объект { lat, lon }
export async function geoCode(place) {
  const geocoderApiKey = '615fae63-0e13-4511-a439-117f2518ddce';
  const uri = encodeURI(
    `https://geocode-maps.yandex.ru/1.x/?apikey=${geocoderApiKey}&geocode=${place}&format=json`,
  );
  const resp = await fetch(uri);
  const res = await resp.json();
  const [lon, lat] =
    res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
      ' ',
    );

  return {
    lat,
    lon,
  };
}

export async function updateMapDom(coords) {
  const str2 = await getStaticMap(coords);

  const myNode = document.getElementsByClassName('map')[0];
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  const imgEl = document
    .getElementsByClassName('map')[0]
    .appendChild(document.createElement('img'));
  imgEl.setAttribute('src', str2);
}

async function getStaticMap(coords) {
  const yandexStaticMapApiKey = '174d4d04-4e84-434c-b778-edcad039d856';
  console.log(
    `https://static-maps.yandex.ru/v1?ll=${coords.lon},${coords.lat}&spn=0.016457,0.00619&apikey=${yandexStaticMapApiKey}`,
  );
  const response2 = await fetch(
    `https://static-maps.yandex.ru/v1?ll=${coords.lon},${coords.lat}&z=11&apikey=${yandexStaticMapApiKey}`,
  );
  return response2.url;
}
