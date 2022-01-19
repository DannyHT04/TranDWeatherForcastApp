let userInput = document.getElementById('userInput');

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=de11588e6dfc1510f946409a79d11581')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=de11588e6dfc1510f946409a79d11581`)
  .then(response => response.json())
  .then(data => console.log(data));