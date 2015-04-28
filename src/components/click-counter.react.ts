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
	
  private clickStore: ClickStore;
  private actions: ViewActions;

  constructor() {
    super();
    this.clickStore = new ClickStore();   
    this.actions = new ViewActions();
    this.state = { clicks: 0 };
  }

  componentDidMount() {
    this.clickStore.addChangeListener(this.onChange.bind(this));
  }

  componentDidUnMount() {
    this.clickStore.removeChangeListener(this.onChange);
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
    return { clicks: this.clickStore.getClicks() };
  }

  private handleClick(event) {
    this.actions.click();
  }
}

export = ClickCounter;