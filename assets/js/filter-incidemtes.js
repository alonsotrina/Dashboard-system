// Form incidentes
const filterFormIncidents = document.getElementById('filterFormIncidents');
const clearFilterBtnIncidents = document.getElementById('clearFilterIncidents');
const searchBtnIncidents = document.getElementById('search-incidents');


console.log('filterFormIncidents', filterFormIncidents)

filterFormIncidents.addEventListener('submit', function (event) {
  event.preventDefault();
  clearFilterBtnIncidents.classList.remove('display-none-button');
  searchBtnIncidents.classList.add('display-none-button')
});

// Limpiar filtro
clearFilterBtnIncidents.addEventListener('click', function () {
  document.getElementById('type-error-incidents').selectedIndex = 0;
  clearFilterBtnIncidents.classList.add('display-none-button');
  searchBtnIncidents.classList.remove('display-none-button')
});