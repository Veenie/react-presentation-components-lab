// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
    constructor(props) {
      super(props);
  
      // Initial state here...
      this.state = { mood: 'happy'
      };
    }
  
    handleClick = () => {
      // Probably do some work to update the state
      this.setState({mood: 'sad'})
    }
  
    render() {
        <div onClick={this.handleClick}>{this.state.mood}</div>
      
    }
  }

  export default SimpleComponent;