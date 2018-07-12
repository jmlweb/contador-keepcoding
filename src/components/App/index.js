import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Template from '../../layout';
import CounterValue from '../CounterValue';
import OperationButtons from '../OperationButtons';
import ResetButtons from '../ResetButtons';

const INITIAL_STATE = {
  value: 0,
};

class App extends Component {
  static propTypes = {
    maxValue: PropTypes.number,
  };

  static defaultProps = {
    maxValue: 10,
  };
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  updateCounter(e) {
    const { value } = e.target;
    this.setState(prevState => ({
      value: prevState.value + +value,
    }));
  }

  resetCounter() {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { value } = this.state;
    const { maxValue } = this.props;
    return (
      <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
        <CounterValue value={value} />
        {value > maxValue * -1 && value < maxValue ? (
          <OperationButtons updateCounter={this.updateCounter} removeOne={this.removeOne} />
        ) : (
          <ResetButtons resetCounter={this.resetCounter} />
        )}
      </Template>
    );
  }
}

// class App2 extends Component {
//   state = INITIAL_STATE;

//   updateCounter = (e) => {
//     const { value } = e.target;
//     this.setState(prevState => ({
//       value: prevState.value + +value,
//     }));
//   };

//   resetCounter = () => {
//     this.setState(INITIAL_STATE);
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <Template logo="https://keepcoding.io/es/wp-content/uploads/sites/4/2015/05/logo-keepcoding-web.png">
//         <CounterValue value={value} />
//         {value > -10 && value < 10 ? <OperationButtons updateCounter={this.updateCounter} removeOne={this.removeOne} /> : <ResetButtons resetCounter={this.resetCounter} />}
//       </Template>
//     );
//   }
// }

export default App;
