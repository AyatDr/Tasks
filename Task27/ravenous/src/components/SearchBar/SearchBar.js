import React from 'react';
import './SearchBar.css';


class  SearchBar extends React.Component{

  constructor(props){
   super(props);

   this.state = {
    term: '',      
    location: '',  
    sortBy: 'best_match' 
  };
   

   // Member variable for sort options
  this.sortByOptions = {

    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'

     };

         // Bind methods to the current instance
  this.handleTermChange=this.handleTermChange.bind(this);
  this.handleLocationChange=this.handleLocationChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
  }
  
   

   // Method to determine the CSS class for a sort option
   getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }
  

  handleSortByChange(sortByOption){
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event){
   this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({location:event.target.value});
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }
// This method will dynamically create list items for sorting options
     renderSortByOptions() {
        // Object.keys(sortByOptions) gives us an array of keys from the sortByOptions object
        return Object.keys(this.sortByOptions).map(sortByOption => {
            // For each key, we get the corresponding value from the sortByOptions object
            let sortByOptionValue = this.sortByOptions[sortByOption];
             // Return a list item (<li>) for each sort option. 
            // The 'key' prop is important in lists in React for performance optimization
            // The content of the list item is the name of the sort option 
            return (
                <li 
                className={this.getSortByClass(sortByOptionValue)} 
                key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
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
              <input placeholder="Search Businesses" onChange={this.handleTermChange} />
              <input placeholder="Where?" onChange={this.handleLocationChange}  />
            </div>
            <div className="SearchBar-submit">
            <button onClick={this.handleSearch}>Let's Go</button>

            </div>
          </div>
        );
    }

}

// Export the component to use it in other parts of your app
export default SearchBar ;