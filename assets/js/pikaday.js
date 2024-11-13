window.addEventListener('DOMContentLoaded', () => {
  new Pikaday({
    field: document.getElementById('datepicker'),
    theme: "pikaday-white",
    format: 'DD/MM/YYYY',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    },
    onSelect: function (date) {
      console.log(date);
    },
    i18n: {
      previousMonth: 'Prev',
      nextMonth: 'Next',
      months: [
        'Ene.',
        'Feb.',
        'Mar.',
        'Abr.',
        'May.',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov.',
        'Dic.'
      ],
      weekdays: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
      ],
      weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    }
  });
  new Pikaday({
    field: document.getElementById('datepicker2'),
    theme: "pikaday-white",
    format: 'DD/MM/YYYY',
    toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    },
    onSelect: function (date) {
      console.log(date);
    },
    i18n: {
      previousMonth: 'Prev',
      nextMonth: 'Next',
      months: [
        'Ene.',
        'Feb.',
        'Mar.',
        'Abr.',
        'May.',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sept.',
        'Oct.',
        'Nov.',
        'Dic.'
      ],
      weekdays: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
      ],
      weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    }
  });
})



// Limpiar filtros
// Form historico
const filterForm = document.getElementById('filterForm');
const clearFilterBtn = document.getElementById('clearFilter');
const searchBtn = document.getElementById('search');


filterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  clearFilterBtn.classList.remove('display-none-button');
  searchBtn.classList.add('display-none-button')
});

// Limpiar filtro
clearFilterBtn.addEventListener('click', function () {
  document.getElementById('tipo-error').selectedIndex = 0;
  document.getElementById('datepicker').value = '';
  document.getElementById('datepicker2').value = '';
  clearFilterBtn.classList.add('display-none-button');
  searchBtn.classList.remove('display-none-button')
});