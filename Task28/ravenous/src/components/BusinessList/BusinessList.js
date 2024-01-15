import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'; // import the BusinessList.css file into my BusinessJist component

class  BusinessList extends React.Component {
   
    render(){
        const {businesses} = this.props;
        return (
             
            <div className="BusinessList">

            {businesses.map((business) => {
            // For each business in the array, a Business component is rendered.
            return <Business key={business.id} business={business}/>;
            }
            )}
             
             </div>
       );


    }

}

export default BusinessList; // making the BusinessList component available for import in other JavaScript or React files. 

