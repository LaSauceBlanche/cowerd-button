document.addEventListener('mousemove', function(event) {
    var button = document.getElementById('fleeing-button');
    var buttonRect = button.getBoundingClientRect();
    var buttonX = buttonRect.left + buttonRect.width / 2;
    var buttonY = buttonRect.top + buttonRect.height / 2;
  
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    var distanceX = mouseX - buttonX;
    var distanceY = mouseY - buttonY;
  
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
    var maxDistance = 200; // Distance maximale à partir de laquelle le bouton commence à s'enfuir
    var speed = 5; // Vitesse de fuite (plus la valeur est élevée, plus il fuit rapidement)
  
    if (distance < maxDistance) {
      var offsetX = (distanceX / distance) * speed;
      var offsetY = (distanceY / distance) * speed;
  
      var newButtonX = buttonX - offsetX;
      var newButtonY = buttonY - offsetY;
  
      // Vérifier les dépassements de bord horizontaux
      if (newButtonX < 0) {
        newButtonX = window.innerWidth - buttonRect.width;
        mouseX = newButtonX + offsetX;
      } else if (newButtonX > window.innerWidth - buttonRect.width) {
        newButtonX = 0;
        mouseX = newButtonX + offsetX;
      }
  
      // Vérifier les dépassements de bord verticaux
      if (newButtonY < 0) {
        newButtonY = window.innerHeight - buttonRect.height;
        mouseY = newButtonY + offsetY;
      } else if (newButtonY > window.innerHeight - buttonRect.height) {
        newButtonY = 0;
        mouseY = newButtonY + offsetY;
      }
  
      button.style.left = newButtonX + 'px';
      button.style.top = newButtonY + 'px';
    }
  
    // Mettre à jour la position de la souris
    event.clientX = mouseX;
    event.clientY = mouseY;
  });
  