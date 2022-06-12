console.log("Hello"); //testing connection to HTML

var cityInputEl = document.querySelector('#cityname');


var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    var cityname = cityInputEl.value.trim();
  
    if (cityname) {
      getUserRepos(cityname);
  
      // clear old content
      cityInputEl.value = '';
    } else {
      alert('Please enter a city name');
    }
  };

  var getCityWeather = function(city) {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='{lat}&lon={lon}&exclude={part}&appid={API key}
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayRepos(data, user);
          });
        } else {
          alert('Error: City');
        }
      })
      .catch(function(error) {
        alert('Unable to pull up City');
      });
  };

