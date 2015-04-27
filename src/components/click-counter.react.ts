/// <reference path='../../typings/_all.d.ts' />

import React = require('react');
import TypedReact = require('typed-react');
import ClickStore = require('../stores/click-store');
import Dispatcher = require('../dispatcher/base-dispatcher');
import ViewActions = require('../actions/view-action-creator');

interface ClickCounterIProps { }
interface ClickCounterIState { 
  clicks: number;
}

class ClickCounterClass extends TypedReact.Component<ClickCounterIProps, ClickCounterIState> {
	
  private clickStore: ClickStore;
  private actions: ViewActions;
  constructor() {
    super();
    this.clickStore = new ClickStore();   
    this.actions = new ViewActions();
  }

  getInitialState() {
    return {
      clicks: 0
    }
  }

  componentDidMount() {
    this.clickStore.addChangeListener(this.onChange);
  }

  componentDidUnMount() {
    this.clickStore.removeChangeListener(this.onChange);
  }

  render() {
      return /*jsx*/
    <div onClick={this.handleClick}>
        <span>{this.state.clicks}</span>
    </div>
    /*jsx*/;
        
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

export var ClickCounter = TypedReact.createClass(ClickCounterClass);