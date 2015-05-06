/// <reference path='../../typings/_all.d.ts' />

import PayloadSources = require('../constants/PayloadSources');
import flux = require('flux');

interface IDispatcher {
    handleViewAction(action: any): void;
}

class BaseDispatcher extends flux.Dispatcher<any> {

    constructor() {
        super();
    }

    handleViewAction(action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
}

var dispatcher = new BaseDispatcher();
export = dispatcher;