import React from 'react';
import './Node.css';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { col, row, isStart, isFinish } = this.props;
    const extraClassName = isStart
      ? 'node-start'
      : isFinish
      ? 'node-finish'
      : '';
    return <div className={`node ${extraClassName}`}></div>;
  }
}

export default Node;
