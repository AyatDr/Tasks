//Project opened with Live Server on localhost:5500 
import React from 'react'; //imports the React library
import ReactDOM from 'react-dom'; //imports ReactDOM, which provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements

class Contact extends React.Component {
  constructor(props) {
    super(props);
    //an object where we store property values that belong to the component
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);//binds the authorize method to the component
  }


  //This method is called when you want to check the password.
  authorize(e) { //e is the event object passed to the method
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password; // compares the entered password with the one in the state.
    //If the password is correct, authorized becomes true.
    this.setState({
      authorized: auth
    });
  }
   //This method returns the JSX that should be rendered to the DOM.
  render() {
    let login; // Declare the login variable

    if (!this.state.authorized) {
      login = (
        <form action="#" onSubmit={this.authorize}>
           <input type="password" placeholder="Password" />
           <input type="submit" />
        </form>
      );
    }

    const contactInfo = (
      <ul>
      <li>
        Ayat@Driouech.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>

      );

    return (
      //A div with an id of authorization is returned, containing an h1 tag with "Contact" and a list with email and phone number.
      <div id="authorization">
        <h1>
        {this.state.authorized ? 'Contact' : 'Enter the Password'}
        </h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

//This is a function provided by the react-dom package. Its primary role is to render a React element into the DOM.
//takes two arguments. The first is what you want to render (in this case, the Contact component).
// The second is where you want to render it (the DOM element with the ID of 'app').
ReactDOM.render(
  <Contact />, //JSX (JavaScript XML), which looks like HTML and is used in React to describe what the UI should look like.
  document.getElementById('app')
); //tells React to render our Contact component inside the DOM element with the id of app. 