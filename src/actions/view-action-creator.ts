import BaseDispatcher = require('../dispatcher/base-dispatcher');
import Constants = require('../constants/Constants');

interface IViewActionCreators {
    click(): void;
}

class ViewActionCreator implements IViewActionCreators {
  private dispatcher: typeof BaseDispatcher;
    private actionTypes: ActionTypes;

    constructor() {
      this.dispatcher = BaseDispatcher;
      this.actionTypes = Constants.actionTypes();
    }

    public click(): void {
      this.dispatcher.handleViewAction({
        type: this.actionTypes.CLICK
      });
    }
}

var actionCreator = new ViewActionCreator();
export = actionCreator;