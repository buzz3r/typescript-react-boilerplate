/// <reference path='../typings/_all.d.ts' />

import React = require('react');
import TypedReact = require('typed-react');
import component = require('./components/click-counter.react');
import Router = require('./components/click-counter.react');

interface AppIProps {}
interface AppIState {}

class AppClass extends TypedReact.Component<AppIProps, AppIState> {
    render() {
        return React.createElement(component.ClickCounter, '');
    }
}

export var App = React.createFactory(TypedReact.createClass<AppIProps, AppIState>(AppClass));

window.onload = function () {
  var app = App({});

  React.render(app, document.getElementById('counter'));
}