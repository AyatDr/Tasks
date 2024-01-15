import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';


// The App component now handles the data, while BusinessList and Business focus on presentation
const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90}
    
    const businesses = [
      business, // Reference the same business object
      business, // In a real scenario, these would be different business objects
      business, // but for now, we're simulating with the same object
      business,
      business,
      business
    ];


//The array of businesses is passed from App.js to BusinessList as a prop.
class  App extends React.Component {

  render(){
    return(
      <div className="App">
        <h1>ravenous</h1>
         <SearchBar/>
         <BusinessList businesses={businesses}/>
      </div>

    );
  }
}

export default App;
