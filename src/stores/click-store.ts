import Dispatcher = require('../dispatcher/base-dispatcher');
import ActionTypes = require('../constants/ActionTypes');
import Events = require('events');

class ClickStore extends Events.EventEmitter {

    private dispatcher: typeof Dispatcher;
    private actionTypes: ActionTypes;
    private CHANGE_EVENT: string;
    private click: number;

    constructor() {
        super();
        this.dispatcher = Dispatcher;
        this.CHANGE_EVENT = 'change';
        this.click = 0;
        this.dispatcher.register(this.dispatchToken.bind(this));
    }

    public addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    public removeChangeListener(callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }

    public getClicks() {
        return this.click;
    }

    private addClick() {
        this.click++;
    }

    private emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    private dispatchToken(payLoad: any): void {
        var action = payLoad.action;

        switch (action.type) {
            case ActionTypes.CLICK:
                this.addClick();
                this.emitChange();
                break;
            default:
            // nothing
        }
    }
}

var clickStore = new ClickStore();
export = clickStore;
