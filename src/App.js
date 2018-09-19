import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Timeline, Icon, Button } from 'antd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentStep : 0,
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;  
  }

  clickNext = () => {
    this.setState(preState  => ({
      currentStep : preState.currentStep + 1
    }));
    console.log(this.state.currentStep);
  }

  clickPrevious = () => {
    this.setState(preState  => ({
      currentStep : preState.currentStep - 1
    }));
    console.log(this.state.currentStep);
  }
  render() {
    return (
      <div>
         <div className="timeLine">
         <Timeline>
          <Timeline.Item dot = {this.state.currentStep == 1 ? <Icon type="clock-circle-o" style={{ fontSize: '16px' }} /> : ""}>step1</Timeline.Item>
          <Timeline.Item dot = {this.state.currentStep == 2 ? <Icon type="clock-circle-o" style={{ fontSize: '16px' }} /> : ""}>step2</Timeline.Item>
          <Timeline.Item dot = {this.state.currentStep == 3 ? <Icon type="clock-circle-o" style={{ fontSize: '16px' }} /> : ""}>step3</Timeline.Item>
          {/* <Timeline.Item>step1</Timeline.Item>
          <Timeline.Item>step2</Timeline.Item> */}
        </Timeline>
      </div>

      <div>

        <Button type="primary" onClick = {this.clickPrevious.bind(this)}>previous</Button>
        <Button type="primary" onClick = {this.clickNext.bind(this)}>next</Button>
      </div>
      </div>
     
    );
  }
}

export default App;
