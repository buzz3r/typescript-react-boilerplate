/// <reference path='../../typings/_all.d.ts' />

import React = require('react');
import TypedReact = require('typed-react');
import PostStore = require('../stores/post-store');
import Dispatcher = require('../dispatcher/base-dispatcher');
import ViewActions = require('../actions/view-action-creator');

interface ClickCounterIProps { }
interface ClickCounterIState { 
  clicks: number;
}

class ClickCounterClass extends TypedReact.Component<ClickCounterIProps, ClickCounterIState> {
	
  private postStore: PostStore;
  private actions: ViewActions;
  constructor() {
    super();
    this.postStore = new PostStore();   
    this.actions = new ViewActions();
  }

  getInitialState() {
    return {
      clicks: 0
    }
  }

  componentDidMount() {
    this.postStore.addChangeListener(this.onChange);
  }

  componentDidUnMount() {
    this.postStore.removeChangeListener(this.onChange);
  }

  render() {
    return React.DOM.div({onClick: this.handleClick}, this.state.clicks);    
  }

  private onChange(): void {
    this.setState(this.getStateFromStores());
  }

  private getStateFromStores(): any {
    return { clicks: this.postStore.getClicks()};
  }

  private handleClick(event) {
    this.actions.click();
  }
}

export var ClickCounter = TypedReact.createClass(ClickCounterClass);