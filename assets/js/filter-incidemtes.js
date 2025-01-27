function handleFilters(formId, clearBtnId, searchBtnId, fieldsToReset = []) {
  const form = document.getElementById(formId);
  const clearBtn = document.getElementById(clearBtnId);
  const searchBtn = document.getElementById(searchBtnId);

  if (!form || !clearBtn || !searchBtn) {
    console.error(`No se encontraron uno o más elementos: ${formId}, ${clearBtnId}, ${searchBtnId}`);
    return;
  }


  // Evento al enviar el formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearBtn.classList.remove('display-none-button');
    searchBtn.classList.add('display-none-button');
  });

  // Evento para limpiar los filtros
  clearBtn.addEventListener('click', function () {
    fieldsToReset.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.tagName === 'SELECT') {
        field.selectedIndex = 0; // Resetear selects
      } else if (field.tagName === 'INPUT') {
        field.value = ''; // Resetear inputs
      }
    });

    clearBtn.classList.add('display-none-button');
    searchBtn.classList.remove('display-none-button');
  });
}
// Form reporte descarga
handleFilters('filterFormDownloadReport', 'clearFilterDownloadReport', 'searchDownloadReport', [
  'date-download-report',
  'input-download-report',
]);

// Form reporte bitácora
handleFilters('filterFormLogReport', 'clearFilterLogReport', 'searchLogReport', [
  'date-log-report',
  'user-download-report',
  'download-report',
]);

// Form monitoreo incidnetes
handleFilters('filterFormIncidents', 'clearFilterIncidents', 'searchIncidents', [
  'select-incidents'
]);

// Form monitoreo histórioc
handleFilters('filterFormHistory', 'clearFilterHistory', 'searchHistory', [
  'tipo-error',
  'datepickerHistoyFrom',
  'datepickerHistoyTo',
]);