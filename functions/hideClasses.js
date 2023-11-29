function toggleVisibility(hideClasses, showClasses, buttonId) {
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

  // Change the color of the specified button and reset others
  document.querySelectorAll('button').forEach(function(button) {
    if (button.id === buttonId) {
      button.style.backgroundColor = '#9AF29D';
      button.style.color = 'black'
    } else {
      button.style.backgroundColor = 'black';
      button.style.color = 'white'
    }
  });
}