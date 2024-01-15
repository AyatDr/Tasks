import React from 'react';
import Button from '../Button/Button';

class Random extends React.Component {

  constructor(props){
    super(props);

     this.state = { color: [255, 255, 0] } ;

      // Binding handleClick method
      this.handleClick = this.handleClick.bind(this);

  }
  
  componentDidMount() {
    this.applyColor();
  }
  
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    // Initialize an empty array named 'random'.
    const random = [];
    // Start of a for loop that will run three times (from 0 to 2).
    for (let i = 0; i < 3; i++) {
      // Inside the loop, we generate a random number.
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  handleClick(){
     // Calling setState to update the component's state
    this.setState({
       // Updating the 'color' property of the component's state.
      color: this.chooseColor()
  });
  }

   // Definition of the render method in a React component class
  render() {
    return (
       // The render method returns the JSX (JavaScript XML) that describes what UI to display.
      <div>
         {/* A heading <h1> element displaying dynamic content. */}
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is : {this.formatColor(this.state.color)} !
        </h1>
        <Button  light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}


export default Random ;
