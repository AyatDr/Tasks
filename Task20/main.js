// Foursquare API Info
/*
 * Note to Reviewer:
 * In this project, I have used version 3 of the Foursquare API. 
 * I encountered issues while trying to use version 2 of the API, which 
 * required both a client ID and a client secret for authentication.
 * The version 3 of the API simplifies the process by requiring only an API key for authentication. 
 * This change was essential for the successful implementation of the API in this project.
 * Hence, you will notice that the code includes the use of an API key without the need for a client ID and client secret.
 */

const clientId ='';
const clientSecret ='';
const url = 'https://api.foursquare.com/v3/places/search?near=';
 // API key for authorization
 const apiKey =''; //Foursquare API Key

// OpenWeather Info
const openWeatherKey ='';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
// This allows us to use 'await' within the function to handle  asynchronous operations
const getVenues = async () => {
  const city = $input.val(); 

  // Construct the full URL for the Foursquare API request
  const urlToFetch = `${url}${encodeURIComponent(city)}&limit=10`;

  // Options for the fetch request
  const options = {
    method: 'GET', // Specifies the HTTP request method as GET to
    headers: {
      'Accept': 'application/json',  // Indicates that the client prefers to receive JSON in the response
      'Authorization': apiKey // Provides an authorization token/API key for authentication
    }
  };

  try {
    // Sending a GET request using fetch to the specified URL with defined options
    const response = await fetch(urlToFetch, options);
    
    if (!response.ok) {
      throw new Error('Request failed!');
    }
     // This line waits for the response to be converted to a JSON object
    const jsonResponse = await response.json();
    console.log('JSON Response:', jsonResponse);

    // Extracting venue data from the JSON response
    // Here, the 'results' array from the response is mapped to create an array of venue objects
    const venues = jsonResponse.results.map(item => item);
    // Returning the array of venues for further processing or use elsewhere in the code
    console.log(venues);

    return venues;
  } catch (error) {
    console.error('Error:', error);
  }
};

const getForecast = async () => {
  // Initiates an asynchronous function to fetch weather data
  try {
     // Retrieves the city name input by the user
    const city = $input.val();
    // Constructs the URL for the weather API reques
    const urlToFetch = `${weatherUrl}?q=${city}&APPID=${openWeatherKey}`;

     // Sends a GET request to the weather API and waits for the response
    const response = await fetch(urlToFetch);

     // Checks if the response from the API is successful
    if (response.ok) {
      // Parses the response body as JSON and waits for the parsing to complete
      const jsonResponse = await response.json();

      // Logs the JSON response to the console for debugging
      console.log(jsonResponse);
        // Calls renderForecast to update the UI with the weather data
      renderForecast(jsonResponse);

       // Returns the parsed JSON response for potential further use
      return jsonResponse;
    }
  } catch (error) {
    // Step 20
    console.error('Error fetching forecast:', error);
  return {};
  }
};


// Render functions
const renderVenues = (venues) => {
  // Iterating over each venue div and corresponding venue data
  $venueDivs.forEach(($venue, index) => {
     // Retrieve the individual venue object from the venues array
    const venue = venues[index];
   
    // Extract the icon information of the venue's category
    const venueIcon = venue.categories[0].icon;

    //Build the full source URL for the venue icon using its prefix, a fixed part for the background, and its suffix
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    // Generate the HTML content for the venue using the helper function, passing the venue's name, location, and image source
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);

    // Append venueContent to the venue div
    $venue.append(venueContent);
  });
  // Add city name to $destination
  $destination.append(`<h2>${venues[0].location.locality}</h2>`);
}

// Make sure createVenueHTML is defined in public/helpers.js or similar


const renderForecast = (day) => {
  // Add your code here:
  
	const weatherContent = createWeatherHTML(day);
  $weatherDiv.empty().append(weatherContent);
}

const executeSearch = () => {
   // Empty the contents of each venue div in $venueDivs
  $venueDivs.forEach(venue => venue.empty());
   // Empty the weather and destination divs
  $weatherDiv.empty();
  $destination.empty();
   // Make the container visible
  $container.css("visibility", "visible");
   // Call the getVenues function and wait for its promise to resolve
  getVenues()
   // Après avoir obtenu les données des lieux, les affiche sur la page.
    .then(venues => {
      renderVenues(venues);
      // Ensuite, lance la fonction getForecast pour obtenir les prévisions météorologiques.
      return getForecast();
    })
    .then(forecast => {
       // Une fois les données météorologiques obtenues, les affiche également.
      renderForecast(forecast);
    })
    .catch(error => console.log(error));
      // Empêche l'action par défaut du formulaire, qui est de recharger la page.
  return false;
}

$submit.click(executeSearch)
