import React from "react";
import { Stream } from './Stream';

class Leaf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
    this.handleEvent = event => {
      if (event === 'click') {
        this.setState(state => ({ clickCount: state.clickCount + 1 }));
      }
    };
    this.leafRenderCount = 0;
  }
  render() {
    return (
      <div>
        <p>Leaf Render Count: {++this.leafRenderCount}</p>
        <p>Leaf Click Event Count: {this.state.clickCount}</p>
        <Stream onEvent={this.handleEvent} />
      </div>
    );
  }
}
export default Leaf;
