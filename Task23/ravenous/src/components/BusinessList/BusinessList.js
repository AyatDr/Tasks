import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'; // import the BusinessList.css file into my BusinessJist component

class  BusinessList extends React.Component {
   
    
    render(){
      
        return (

            <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
          </div>

        );


    }

}

export default BusinessList; // making the BusinessList component available for import in other JavaScript or React files. 

