
/* eslint no-param-reassign:
  ["error", { "props": true, "ignorePropertyModificationsFor": ["element"] }]
*/

export default function renderAlbums(data, element) {
  const markup = `
  <div class="list-item">
    <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
    <div class="list-description">
      <p class="list-title">${data[0].name}</p>
      <p class="list-subtitle">${data[0].artists[0].name}</p>
    </div>
  </div>`;

  element.innerHTML = markup;
}
