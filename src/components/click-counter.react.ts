/// <reference path='../../typings/_all.d.ts' />

import React = require('react');
import ClickStore = require('../stores/click-store');
import Dispatcher = require('../dispatcher/base-dispatcher');
import ViewActions = require('../actions/view-action-creator');

interface ClickCounterIProps { }
interface ClickCounterIState { 
  clicks: number;
}

class ClickCounter extends React.Component<ClickCounterIProps, ClickCounterIState> {
	
  constructor() {
    super();
    this.state = { clicks: 0 };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ClickStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ClickStore.removeChangeListener(this.onChange);
  }

  render() {
    return  <div onClick={this.handleClick.bind(this)}>
              <span>{this.state.clicks}</span>
            </div>;    
  }

  private onChange(): void {
    this.setState(this.getStateFromStores());
  }

  private getStateFromStores(): any {
    return { clicks: ClickStore.getClicks() };
  }

  private handleClick(event) {
    ViewActions.click();
  }
}

export = ClickCounter;