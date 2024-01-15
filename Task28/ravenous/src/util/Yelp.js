const apiKey = ''; 

const Yelp = {
  // search method to interact with Yelp's API.
  // It takes three parameters: term, location, and sortBy.
   search(term, location, sortBy) {
    // Fetch data from Yelp API using the provided parameters.
    // The URL includes a CORS proxy to avoid cross-origin issues in the browser.
    
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      // Set the Authorization header with the Bearer token (apiKey).
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
       // Convert the response to JSON format.
      return response.json();
    }).then(jsonResponse => {
        // Check if jsonResponse contains the 'businesses' field.
      if (jsonResponse.businesses) {
         // Map over the array of businesses and transform the data 
        // into a format that the application expects.
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};
// Export the Yelp object to be used in other parts of the application.
export default Yelp;
  
