import React from 'react';
import './SearchBar.css';



    const  sortByOptions = {

    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'

     };

class  SearchBar extends React.Component{

// This method will dynamically create list items for sorting options
     renderSortByOptions() {
        // Object.keys(sortByOptions) gives us an array of keys from the sortByOptions object
        return Object.keys(sortByOptions).map(sortByOption => {
            // For each key, we get the corresponding value from the sortByOptions object
            let sortByOptionValue = sortByOptions[sortByOption];
             // Return a list item (<li>) for each sort option. 
            // The 'key' prop is important in lists in React for performance optimization
            // The content of the list item is the name of the sort option 
            return (
                <li key={sortByOptionValue}>{sortByOption}</li>
            );
        });    
    }

    // The render method returns the JSX that defines the UI of my component
    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
               
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
            <button >Let's Go</button>
            </div>
          </div>
        );
    }

}

// Export the component to use it in other parts of your app
export default SearchBar ;