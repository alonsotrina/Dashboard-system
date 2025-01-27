window.addEventListener('DOMContentLoaded', () => {
  new Pikaday({
    field: document.getElementById('datepickerHistoyFrom'),
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
    field: document.getElementById('datepickerHistoyTo'),
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
  
  const pcikerDownloadReport= new Pikaday({
    field: document.getElementById('date-download-report'),
    theme: "pikaday-white",
    format: 'DD/MM/YYYY',
    firstDay: 1,
    toString(date, format) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
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
        'Sábado',
      ],
      weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    }
  });
  pcikerDownloadReport.setDate(new Date());

  const pcikerLogReport= new Pikaday({
    field: document.getElementById('date-log-report'),
    theme: "pikaday-white",
    format: 'DD/MM/YYYY',
    firstDay: 1,
    toString(date, format) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
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
        'Sábado',
      ],
      weekdaysShort: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    }
  });
  pcikerLogReport.setDate(new Date());
})

