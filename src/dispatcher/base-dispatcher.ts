/// <reference path='../../typings/_all.d.ts' />

import Constants = require('../constants/Constants');
import flux = require('flux');

interface IDispatcher {
    handleViewAction(action: any): void;
}

class BaseDispatcher extends flux.Dispatcher<any> {

    private _constants: PayloadSources;

    constructor() {
        super();
        this._constants = Constants.payloadSources();
    }

    handleViewAction(action) {
        var payload = {
            source: this._constants.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
}

var dispatcher = new BaseDispatcher();
export = dispatcher;