import React from 'react';

export class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (e) => {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form >
        <input type="radio" name="src" value="fast" onChange={this.handleClick} /> fast
        <input type="radio" name="src" value="slow" onChange={this.handleClick} /> slow
        <input type="radio" name="src" value="cute" onChange={this.handleClick} /> cute
        <input type="radio" name="src" value="eek"  onChange={this.handleClick}/> eek
      </form>
    );
  }
}
export default Menu;