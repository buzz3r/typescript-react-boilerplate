/// <reference path='../typings/_all.d.ts' />

import React = require('react');
import ClickCounter = require('./components/click-counter.react');

interface AppIProps {}
interface AppIState {}

class App extends React.Component<AppIProps, AppIState> {
    render() {
        return <ClickCounter />;
    }
}

React.render(<App/>, document.getElementById('counter'));
