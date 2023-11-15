function toggleVisibility(hideClasses, showClasses) {
  // Skryje všechny třídy v seznamu hideClasses
  hideClasses.forEach(function(className) {
    document.querySelectorAll('.' + className).forEach(function(element) {
      element.style.display = 'none';
    });
  });

  // Zobrazí všechny třídy v seznamu showClasses
  showClasses.forEach(function(className) {
    document.querySelectorAll('.' + className).forEach(function(element) {
      element.style.display = 'block';
    });
  });
}